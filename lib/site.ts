/**
 * Single source of truth for canonical site URL and shared SEO/organisation
 * data. Everything that needs an absolute URL (metadataBase, sitemap, robots,
 * JSON-LD) reads from here so they can never drift apart.
 */

// Deliberately NOT derived from NEXT_PUBLIC_HOST: that variable points at the
// CMS backend (https://cms.pcred.org in production, localhost in dev), so using
// it for canonicals/sitemap would advertise the wrong origin to search engines.
// Set NEXT_PUBLIC_SITE_URL to the public marketing domain in apphosting.yaml.
const FALLBACK_URL = "https://www.pcred.org";

function normalise(url: string) {
  return url.trim().replace(/\/+$/, "");
}

export const SITE_URL = normalise(process.env.NEXT_PUBLIC_SITE_URL || FALLBACK_URL);

export const SITE_NAME = "PCRED";

export const SITE_DESCRIPTION =
  "Strategic financial advisory for capital raising, debt structuring, M&A, valuation, CFO support and governance across India.";

/** Absolute URL helper — required for OG/Twitter images and canonicals. */
export function abs(path = "/") {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "PCRED Venture Pvt. Ltd.",
  alternateName: "PCRED",
  url: SITE_URL,
  logo: abs("/logo.webp"),
  image: abs("/logo.webp"),
  description: SITE_DESCRIPTION,
  areaServed: "IN",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Lodha Supremus, 520, Off Mahakali Caves Rd, Chakala Industrial Area (MIDC), Andheri East",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400093",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-22-3512-0060",
      contactType: "customer service",
      email: "info@pcred.org",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
} as const;
