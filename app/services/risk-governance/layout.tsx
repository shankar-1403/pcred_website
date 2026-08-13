import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk & Governance | PCRED",
  description:
    "PCRED provides risk and governance advisory to companies, promoters and investors across the corporate lifecycle.",
};

export default function RiskGovernanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
