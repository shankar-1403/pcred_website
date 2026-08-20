import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const RTDB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
const STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;

async function uploadResumeToStorage(
  file: File,
  applicantName: string
): Promise<string> {
  if (!STORAGE_BUCKET) throw new Error("Storage bucket not configured.");

  const sanitized = applicantName.replace(/[^a-zA-Z0-9]/g, "_");
  const ext = file.name.split(".").pop() ?? "pdf";
  const fileName = `resumes/${sanitized}_${Date.now()}.${ext}`;
  const uploadUrl = `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/${encodeURIComponent(fileName)}?uploadType=media`;

  const arrayBuffer = await file.arrayBuffer();
  const res = await fetch(uploadUrl, {
    method: "POST",
    headers: { "Content-Type": file.type || "application/pdf" },
    body: arrayBuffer,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resume upload failed: ${res.status} ${text}`);
  }

  const encodedName = encodeURIComponent(fileName);
  return `https://firebasestorage.googleapis.com/v0/b/${STORAGE_BUCKET}/o/${encodedName}?alt=media`;
}

async function saveToDatabase(data: Record<string, string>) {
  if (!RTDB_URL) return;
  await fetch(`${RTDB_URL}/job_applications.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

async function sendEmail(data: {
  jobTitle: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  message: string;
  resumeUrl: string;
}) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    console.warn("[careers/apply] SMTP not configured — skipping email.");
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
        <h1 style="margin: 0; color: #ffffff; font-size: 22px;">New Job Application</h1>
        <p style="margin: 6px 0 0; color: #DDB162; font-size: 14px;">${data.jobTitle}</p>
      </div>

      <div style="background: #f9fafb; padding: 28px 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; width: 140px;">
              <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Full Name</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <span style="font-size: 15px; font-weight: 600; color: #045178;">${data.name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Email</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <a href="mailto:${data.email}" style="color: #045178; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Phone</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <a href="tel:${data.phone}" style="color: #045178; text-decoration: none;">${data.phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Experience</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              ${data.experience || "N/A"}
            </td>
          </tr>
          ${data.message ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; vertical-align: top;">
              <span style="font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em;">Cover Note</span>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb;">
              <p style="margin: 0; line-height: 1.6; color: #374151;">${data.message.replace(/\n/g, "<br/>")}</p>
            </td>
          </tr>` : ""}
        </table>

        ${data.resumeUrl ? `
        <div style="margin-top: 24px; text-align: center;">
          <a href="${data.resumeUrl}"
             style="display: inline-block; background: #045178; color: #ffffff; padding: 12px 28px; border-radius: 50px; font-size: 14px; font-weight: 600; text-decoration: none;">
            View / Download Resume
          </a>
        </div>` : ""}

        <p style="margin: 28px 0 0; font-size: 12px; color: #9ca3af; text-align: center;">
          Received via PCRED Careers · ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
        </p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"PCRED Careers" <${user}>`,
    to: "pcred.shankar@gmail.com",
    replyTo: data.email,
    subject: `New Application: ${data.jobTitle} from ${data.name}`,
    html,
  });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const jobTitle   = String(formData.get("jobTitle")   ?? "").trim();
    const name       = String(formData.get("name")       ?? "").trim();
    const email      = String(formData.get("email")      ?? "").trim();
    const phone      = String(formData.get("phone")      ?? "").trim();
    const experience = String(formData.get("experience") ?? "").trim();
    const message    = String(formData.get("message")    ?? "").trim();
    const resumeFile = formData.get("resume") as File | null;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email and phone are required." }, { status: 400 });
    }

    let resumeUrl = "";
    if (resumeFile && resumeFile.size > 0) {
      resumeUrl = await uploadResumeToStorage(resumeFile, name);
    }

    const record = {
      jobTitle,
      name,
      email,
      phone,
      experience,
      message,
      resumeUrl,
      submittedAt: new Date().toISOString(),
    };

    await saveToDatabase(record);

    sendEmail({ jobTitle, name, email, phone, experience, message, resumeUrl }).catch((err) =>
      console.error("[careers/apply] Email failed:", err)
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[careers/apply]", error);
    const msg = error instanceof Error ? error.message : "Submission failed.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
