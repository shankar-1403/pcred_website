import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

const RTDB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

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

  const row = [
    data.submittedAt,
    data.name,
    data.email,
    data.phone,
    data.company,
    data.service,
    data.message,
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1!A:G",
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
    }

    const data = {
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone).trim(),
      company: String(company ?? "").trim(),
      service: String(service ?? "").trim(),
      message: String(message).trim(),
      submittedAt: new Date().toISOString(),
    };

    await writeToDatabase(data);

    appendToSheets(data).catch((err) =>
      console.error("[contact] Sheets append failed:", err)
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact]", error);
    const message = error instanceof Error ? error.message : "Submission failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
