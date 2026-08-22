import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "PCRED is a corporate advisory firm partnering with MSMEs and growing enterprises across India on financial advisory, funding solutions and long-term growth support.",
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Us | PCRED",
    description:
      "PCRED is a corporate advisory firm partnering with MSMEs and growing enterprises across India on financial advisory, funding solutions and long-term growth support.",
    url: "/about-us",
    type: "website",
  },
};

export default function AboutUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
