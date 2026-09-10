import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RTDB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Trim and cap a field so one submission can't write an unbounded payload. */
const field = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

/**
 * RTDB keys cannot contain . $ # [ ] / — encode the address so it can be used
 * as the record key. Keying by email (rather than an auto-generated push key,
 * as /contact_submissions uses) makes re-subscribing idempotent instead of
 * piling up duplicate rows for the same address.
 */
function emailKey(email: string) {
  return email.toLowerCase().replace(/[.$#[\]/]/g, (c) =>
    ({ ".": ",", $: "_S_", "#": "_H_", "[": "_LB_", "]": "_RB_", "/": "_FS_" }[c] ?? "_")
  );
}

async function writeToDatabase(data: Record<string, string>) {
  if (!RTDB_URL) throw new Error("Firebase database URL not configured.");

  const key = emailKey(data.email);
  const res = await fetch(`${RTDB_URL}/newsletter_subscribers/${key}.json`, {
    method: "PUT",
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
    console.warn("[subscribe] Google Sheets not configured — skipping.");
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

  const row = [data.subscribedAt, safe(data.email), data.source];

  // Separate tab from /contact's "Sheet1" — different column shape, and
  // keeps the two submission types from interleaving in one sheet. Create a
  // tab named exactly "Subscribers" in the same spreadsheet before this runs.
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Subscribers!A:C",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}

async function sendConfirmation(email: string) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.warn("[subscribe] SMTP not configured — skipping confirmation email.");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: #045178; padding: 28px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="margin: 0; color: #ffffff; font-size: 22px;">You're subscribed</h1>
        <p style="margin: 6px 0 0; color: #DDB162; font-size: 14px;">PCRED Insights</p>
      </div>
      <div style="background: #f9fafb; padding: 28px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <p style="margin: 0 0 16px; line-height: 1.6;">Thank you for subscribing to PCRED updates.</p>
        <p style="margin: 0 0 16px; line-height: 1.6;">
          You'll receive our perspectives on funding, capital structure, government
          schemes and growth strategy for Indian businesses — no more than a few
          emails a month.
        </p>
        <p style="margin: 24px 0 0; line-height: 1.6;">
          Warm regards,<br/>
          <strong style="color:#045178;">PCRED Venture Pvt. Ltd.</strong>
        </p>
        <p style="margin: 24px 0 0; font-size: 12px; color: #9ca3af;">
          You received this because ${email.replace(/[<>&"']/g, "")} was entered on pcred.org.
          If this wasn't you, simply ignore this email.
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"PCRED" <${user}>`,
    to: email,
    subject: "You're subscribed to PCRED Insights",
    html,
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    if (!EMAIL_RE.test(String(email).trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const data = {
      email: field(email, 200).toLowerCase(),
      source: "footer",
      subscribedAt: new Date().toISOString(),
    };

    await writeToDatabase(data);

    // Awaited, not fire-and-forget: on a serverless host the container can be
    // frozen as soon as the response is returned, so detached promises here
    // would frequently never reach Sheets or the SMTP server. Settled together
    // so one failing side-effect can't discard the other.
    const [sheets, mail] = await Promise.allSettled([
      appendToSheets(data),
      sendConfirmation(data.email),
    ]);

    if (sheets.status === "rejected") {
      console.error("[subscribe] Sheets append failed:", sheets.reason);
    }
    if (mail.status === "rejected") {
      console.error("[subscribe] Confirmation email failed:", mail.reason);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[subscribe]", error);
    return NextResponse.json(
      { error: "Could not subscribe right now. Please try again." },
      { status: 500 }
    );
  }
}
