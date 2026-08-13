import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "M&A Advisory | PCRED",
  description:
    "PCRED advises companies, promoters and investors on mergers, acquisitions, divestments and strategic transactions across the corporate lifecycle.",
};

export default function MAAdvisoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
