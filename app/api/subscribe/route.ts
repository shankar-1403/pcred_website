import { NextResponse } from "next/server";
import { google } from "googleapis";

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
    // frozen as soon as the response is returned, so a detached promise here
    // would frequently never reach Sheets.
    try {
      await appendToSheets(data);
    } catch (err) {
      console.error("[subscribe] Sheets append failed:", err);
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
