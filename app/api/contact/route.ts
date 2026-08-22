import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

const COMPANY_PROFILE_PATH = path.join(process.cwd(), "public", "PCRED_Company_Profile.pdf");

const RTDB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Trim and cap a field so one submission can't write an unbounded payload. */
const field = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

async function writeToDatabase(data: Record<string, string>) {
  if (!RTDB_URL) throw new Error("Firebase database URL not configured.");

  const res = await fetch(`${RTDB_URL}/contact_submissions.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Database write failed: ${res.status} ${text}`);
  }

  return res.json();
}

async function appendToSheets(data: Record<string, string>) {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!spreadsheetId || !clientEmail || !privateKey) {
    console.warn("[contact] Google Sheets not configured — skipping.");
    return;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  // Prefix any value that Sheets would evaluate as a formula. With
  // USER_ENTERED a submitted "=IMPORTXML(...)" would execute inside the sheet
  // and can exfiltrate its contents, so neutralise the leading character.
  const safe = (v: string) => (/^[=+\-@\t\r]/.test(v) ? `'${v}` : v);

  const row = [
    data.submittedAt,
    safe(data.name),
    safe(data.email),
    safe(data.phone),
    safe(data.company),
    safe(data.service),
    safe(data.message),
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}

async function sendWelcomeEmail(data: Record<string, string>) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.warn("[contact] SMTP not configured — skipping welcome email.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const text = `Dear Sir/Ma'am,

Greetings from PCRED.

We are pleased to introduce PCRED, a leading corporate advisory firm with over a decade of experience, partnering with 400+ businesses across diverse industries. We specialize in helping startups, MSMEs, and enterprises strengthen their financial foundation, raise capital, and accelerate sustainable business growth through strategic financial and risk advisory.

Our core services include:
✅ Working Capital Solutions
✅ Export Finance & Supply Chain Finance
✅ Government Schemes & Corporate Advisory
✅ Retail Loans
✅ IPO Advisory & Equity Financing
✅ Debt Syndication & Project Finance
✅ One-Time Settlement (OTS) & Bill Discounting

At PCRED, we believe every business has unique financial needs. Our experienced team works closely with clients to identify the right funding solutions, optimize capital structures, and leverage government-backed initiatives to support long-term growth and financial resilience.

We look forward to the opportunity to partner with you and contribute to your business success.

Should you have any questions or require any assistance, please feel free to reach out to us.

Warm Regards,
PCRED Venture Pvt. Ltd.`;

  const attachments = fs.existsSync(COMPANY_PROFILE_PATH)
    ? [{ filename: "PCRED Company Profile.pdf", path: COMPANY_PROFILE_PATH }]
    : [];

  if (attachments.length === 0) {
    console.warn("[contact] Company profile PDF not found — sending welcome email without attachment.");
  }

  await transporter.sendMail({
    from: `"PCRED" <${user}>`,
    to: data.email,
    subject: "PCRED - Your One-Stop Corporate Advisory Partner",
    text,
    attachments,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
    }

    if (!EMAIL_RE.test(String(email).trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const data = {
      name: field(name, 120),
      email: field(email, 200),
      phone: field(phone, 40),
      company: field(company, 160),
      service: field(service, 120),
      message: field(message, 5000),
      submittedAt: new Date().toISOString(),
    };

    await writeToDatabase(data);

    // Awaited, not fire-and-forget: on a serverless host the container can be
    // frozen as soon as the response is returned, so detached promises here
    // would frequently never reach Sheets or the SMTP server. Settled together
    // so one failing side-effect can't discard the other.
    const [sheets, mail] = await Promise.allSettled([
      appendToSheets(data),
      sendWelcomeEmail(data),
    ]);

    if (sheets.status === "rejected") {
      console.error("[contact] Sheets append failed:", sheets.reason);
    }
    if (mail.status === "rejected") {
      console.error("[contact] Welcome email failed:", mail.reason);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Submission failed. Please try again." },
      { status: 500 }
    );
  }
}
