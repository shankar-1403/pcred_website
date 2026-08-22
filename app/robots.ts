import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Admin surfaces and API endpoints carry no search value and should
        // never surface in results.
        disallow: [
          "/api/",
          "/dashboard",
          "/internal-blogs",
          "/internal-careers",
          "/login",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
