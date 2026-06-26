import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const firebaseApiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

async function verifyIdToken(idToken: string) {
  if (!firebaseApiKey) {
    throw new Error("Firebase API key is not configured.");
  }

  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseApiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ idToken }),
    }
  );

  if (!response.ok) {
    throw new Error("Invalid or expired sign-in. Please log in again.");
  }

  return response.json();
}

async function uploadToFirebaseStorage(
  idToken: string,
  objectPath: string,
  file: File,
  fileBuffer: ArrayBuffer
) {
  if (!storageBucket) {
    throw new Error("Firebase storage bucket is not configured.");
  }

  const uploadUrl = new URL(
    `https://firebasestorage.googleapis.com/v0/b/${storageBucket}/o`
  );
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
    console.error("[schemes/upload] storage error:", response.status, errorText);

    if (response.status === 401 || response.status === 403) {
      throw new Error(
        "Storage upload denied. Deploy storage.rules and ensure you are signed in."
      );
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
    const schemeId = formData.get("schemeId");
    const field = formData.get("field");

    if (!(file instanceof File) || typeof schemeId !== "string" || typeof field !== "string") {
      return NextResponse.json({ error: "Invalid upload payload." }, { status: 400 });
    }

    const ext = file.name.includes(".") ? file.name.split(".").pop() : "bin";
    const objectPath = `schemes/${schemeId}/${field}.${ext}`;
    const fileBuffer = await file.arrayBuffer();
    const url = await uploadToFirebaseStorage(idToken, objectPath, file, fileBuffer);

    return NextResponse.json({ url });
  } catch (error) {
    console.error("[schemes/upload]", error);

    const message =
      error instanceof Error ? error.message : "Upload failed. Please try again.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
