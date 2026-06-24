import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CGTMSE Loan | Collateral-Free MSME Funding up to ₹10 Crore | Pcred",
  description:
    "Access CGTMSE collateral-free business funding up to ₹10 Crore with Pcred. Expert advisory, documentation support, and lender coordination for MSMEs.",
};

export default function CgtmseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
