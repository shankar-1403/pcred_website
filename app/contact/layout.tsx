import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to PCRED's advisory team about capital raising, debt structuring, valuation, CFO support or risk and governance. We respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | PCRED",
    description:
      "Talk to PCRED's advisory team about capital raising, debt structuring, valuation, CFO support or risk and governance. We respond within one business day.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
