import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/src/context/AuthContext";
import { FontSizeProvider } from "@/src/context/FontSizeContext";
import LayoutContent from "@/components/LayoutContent";
import SmoothScroll from "@/components/SmoothScroll";
import {
  ORGANIZATION_JSONLD,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

// Applied before hydration so a returning visitor's saved font-size preference
// is visible on first paint, with no flash back to the default "medium" size.
const setInitialFontSizeScript = `
(function () {
  try {
    var stored = localStorage.getItem("pcred_font_size_v1");
    if (stored === "small" || stored === "medium" || stored === "large") {
      document.documentElement.setAttribute("data-font-size", stored);
    }
  } catch (e) {}
})();
`;

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  // metadataBase makes every relative OG/Twitter image and canonical resolve to
  // an absolute URL — without it social crawlers silently drop the preview.
  metadataBase: new URL(SITE_URL),
  title: {
    default: "PCRED | Corporate Advisory",
    template: "%s | PCRED",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "corporate advisory",
    "debt syndication",
    "capital raising",
    "M&A advisory",
    "business valuation",
    "CFO advisory",
    "risk and governance",
    "MSME funding India",
    "government schemes",
    "CGTMSE",
  ],
  authors: [{ name: "PCRED Venture Pvt. Ltd." }],
  creator: "PCRED Venture Pvt. Ltd.",
  publisher: "PCRED Venture Pvt. Ltd.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
    url: SITE_URL,
    title: "PCRED | Corporate Advisory",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/site/home_hero_skyline.webp",
        width: 1200,
        height: 630,
        alt: "PCRED — Corporate Advisory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PCRED | Corporate Advisory",
    description: SITE_DESCRIPTION,
    images: ["/site/home_hero_skyline.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/logo.png?v=2",
    shortcut: "/logo.png?v=2",
    apple: "/logo.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-font-size="medium"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", "font-sans", plusJakartaSans.variable, fraunces.variable)}
    >
        <body className="min-h-full flex flex-col">
          <Script
            id="set-initial-font-size"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: setInitialFontSizeScript }}
          />
          {/* Organisation structured data — lets Google build the knowledge
              panel and attach the verified address/phone to the brand. */}
          <Script
            id="organization-jsonld"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(ORGANIZATION_JSONLD),
            }}
          />
          <FontSizeProvider>
            <AuthProvider>
              <SmoothScroll />
              <LayoutContent>{children}</LayoutContent>
            </AuthProvider>
          </FontSizeProvider>
        </body>
    </html>
  );
}
