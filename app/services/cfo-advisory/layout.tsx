import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CFO Advisory | PCRED",
  description:
    "PCRED provides CFO advisory services to companies, promoters and investors across the corporate lifecycle.",
};

export default function CFOAdvisoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
