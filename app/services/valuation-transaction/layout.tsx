import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Valuation & Transaction | PCRED",
  description:
    "PCRED provides valuation and transaction advisory to companies, promoters and investors across the corporate lifecycle.",
};

export default function ValuationTransactionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
