import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/** Public, indexable routes. Admin/CMS routes are intentionally excluded. */
const STATIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/services/corporate-finance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/ma-advisory", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/valuation-transaction", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/cfo-advisory", priority: 0.9, changeFrequency: "monthly" },
  { path: "/services/risk-governance", priority: 0.9, changeFrequency: "monthly" },
  { path: "/schemes", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blogs", priority: 0.7, changeFrequency: "weekly" },
  { path: "/pcred-group", priority: 0.6, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

const RTDB_URL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;

/**
 * Pull CMS-backed ids so scheme and blog detail pages are discoverable.
 * Any failure degrades to the static list rather than breaking the sitemap.
 */
async function fetchIds(collection: string): Promise<string[]> {
  if (!RTDB_URL) return [];
  try {
    const res = await fetch(`${RTDB_URL}/${collection}.json?shallow=true`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as Record<string, unknown> | null;
    return data ? Object.keys(data) : [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const [schemeIds, blogIds] = await Promise.all([
    fetchIds("schemes"),
    fetchIds("blogs"),
  ]);

  const schemeEntries: MetadataRoute.Sitemap = schemeIds.map((id) => ({
    url: `${SITE_URL}/scheme/${id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogIds.map((id) => ({
    url: `${SITE_URL}/blogs/${id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...schemeEntries, ...blogEntries];
}
