import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join PCRED. Work alongside a team of financial advisory specialists helping businesses across India secure funding and build sustainable growth.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | PCRED",
    description:
      "Join PCRED. Work alongside a team of financial advisory specialists helping businesses across India secure funding and build sustainable growth.",
    url: "/careers",
    type: "website",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
