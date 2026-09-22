import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms & Conditions governing your use of the PCRED Corporate Advisory Services website.",
  alternates: { canonical: "/terms-of-service" },
  openGraph: {
    title: "Terms & Conditions | PCRED",
    description:
      "Terms & Conditions governing your use of the PCRED Corporate Advisory Services website.",
    url: "/terms-of-service",
    type: "website",
  },
};

export default function TermsOfServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
