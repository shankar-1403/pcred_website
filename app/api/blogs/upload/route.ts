import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES: Record<string, string> = {
  "image/webp": "webp",
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/svg+xml": "svg",
  "image/gif": "gif",
};

/** Keep ids/fields to a safe flat segment — blocks "../" path traversal. */
function seg(value: string) {
  return value.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 80);
}


async function verifyIdToken(idToken: string) {
  if (!firebaseApiKey) throw new Error("Firebase API key is not configured.");
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseApiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    }
  );
  if (!response.ok) throw new Error("Invalid or expired sign-in. Please log in again.");
  return response.json();
}

async function uploadToFirebaseStorage(
  idToken: string,
  objectPath: string,
  file: File,
  fileBuffer: ArrayBuffer
) {
  if (!storageBucket) throw new Error("Firebase storage bucket is not configured.");
  const uploadUrl = new URL(`https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o`);
  uploadUrl.searchParams.set("name", objectPath);

  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`,
      "Content-Type": file.type || "application/octet-stream",
    },
    body: fileBuffer,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("[blogs/upload] storage error:", response.status, errorText);
    if (response.status === 401 || response.status === 403) {
      throw new Error("Storage upload denied. Ensure you are signed in.");
    }
    throw new Error("Image upload failed. Please try again.");
  }

  const data = (await response.json()) as {
    bucket?: string;
    name?: string;
    downloadTokens?: string;
  };

  const bucket = data.bucket ?? storageBucket;
  const name = data.name ?? objectPath;
  const token = data.downloadTokens ?? randomUUID();
  const encodedPath = encodeURIComponent(name);
  return `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodedPath}?alt=media&token=${token}`;
}

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const idToken = authHeader.slice(7);
    await verifyIdToken(idToken);

    const formData = await request.formData();
    const file = formData.get("file");
    const blogId = formData.get("blogId");
    const field = formData.get("field");

    if (!(file instanceof File) || typeof blogId !== "string" || typeof field !== "string") {
      return NextResponse.json({ error: "Invalid upload payload." }, { status: 400 });
    }

    const ext = ALLOWED_IMAGE_TYPES[file.type];
    if (!ext) {
      return NextResponse.json(
        { error: "Unsupported image type. Use WEBP, PNG, JPG, SVG or GIF." },
        { status: 400 }
      );
    }
    if (file.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json(
        { error: "Image must be smaller than 10MB." },
        { status: 400 }
      );
    }

    const safeId = seg(blogId);
    const safeField = seg(field);
    if (!safeId || !safeField) {
      return NextResponse.json({ error: "Invalid upload payload." }, { status: 400 });
    }
    const objectPath = `blogs/${safeId}/${safeField}.${ext}`;
    const fileBuffer = await file.arrayBuffer();
    const url = await uploadToFirebaseStorage(idToken, objectPath, file, fileBuffer);
    return NextResponse.json({ url });
  } catch (error) {
    console.error("[blogs/upload]", error);
    return NextResponse.json(
      { error: "Upload failed. Please try again." },
      { status: 500 }
    );
  }
}
