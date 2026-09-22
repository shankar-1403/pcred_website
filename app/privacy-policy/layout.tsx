import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PCRED Corporate Advisory Services collects, uses, discloses, and safeguards your personal information.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | PCRED",
    description:
      "How PCRED Corporate Advisory Services collects, uses, discloses, and safeguards your personal information.",
    url: "/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
