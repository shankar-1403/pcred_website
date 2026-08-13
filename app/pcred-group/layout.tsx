import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PCRED Group | PCRED",
  description:
    "The PCRED Group of companies, including Insurath and CredArc, working across financial advisory, insurance and credit solutions.",
};

export default function PcredGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
