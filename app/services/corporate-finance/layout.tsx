import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Finance | PCRED",
  description:
    "PCRED advises companies, promoters and investors on capital raising, debt structuring and financial strategy across critical stages of the corporate lifecycle.",
};

export default function CorporateFinanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
