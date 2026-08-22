import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Funding Schemes",
  description:
    "Explore government-backed and institutional funding schemes, including CGTMSE, that support Indian businesses at every stage of growth.",
  alternates: { canonical: "/schemes" },
  openGraph: {
    title: "Government Funding Schemes | PCRED",
    description:
      "Explore government-backed and institutional funding schemes, including CGTMSE, that support Indian businesses at every stage of growth.",
    url: "/schemes",
    type: "website",
  },
};

export default function SchemesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
