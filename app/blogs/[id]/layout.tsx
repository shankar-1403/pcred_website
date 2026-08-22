import type { Metadata } from "next";
import Script from "next/script";
import { abs, SITE_NAME, SITE_URL } from "@/lib/site";

const RTDB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

type Blog = {
  title?: string;
  excerpt?: string;
  author?: string;
  date?: string;
  category?: string;
  cover_image?: string;
  inner_image?: string;
};

/**
 * The article page itself is a client component, so its metadata is resolved
 * here on the server. A fetch failure degrades to generic copy rather than
 * breaking the route.
 */
async function getBlog(id: string): Promise<Blog | null> {
  if (!RTDB_URL) return null;
  try {
    const res = await fetch(`${RTDB_URL}/blogs/${encodeURIComponent(id)}.json`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return (await res.json()) as Blog | null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog?.title) {
    return {
      title: "Article",
      description: "Insights on funding, growth strategy and financial planning from PCRED.",
      alternates: { canonical: `/blogs/${id}` },
    };
  }

  const description =
    blog.excerpt?.trim() ||
    "Insights on funding, growth strategy and financial planning from PCRED.";
  const image = blog.inner_image || blog.cover_image;

  return {
    title: blog.title,
    description,
    alternates: { canonical: `/blogs/${id}` },
    openGraph: {
      type: "article",
      title: blog.title,
      description,
      url: `/blogs/${id}`,
      siteName: SITE_NAME,
      publishedTime: blog.date,
      authors: blog.author ? [blog.author] : undefined,
      images: image ? [{ url: image, alt: blog.title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlog(id);

  const jsonLd = blog?.title
    ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.excerpt ?? undefined,
        image: blog.inner_image || blog.cover_image || undefined,
        datePublished: blog.date ?? undefined,
        articleSection: blog.category ?? undefined,
        author: blog.author
          ? { "@type": "Person", name: blog.author }
          : { "@type": "Organization", name: "PCRED" },
        publisher: {
          "@type": "Organization",
          name: "PCRED",
          logo: { "@type": "ImageObject", url: abs("/logo.webp") },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blogs/${id}`,
        },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <Script
          id={`blog-jsonld-${id}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      {children}
    </>
  );
}
