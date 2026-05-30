import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Pcred Corporate Advisory Services",
  description:
    "Explore Pcred's financial advisory services — capital markets, debt, virtual CFO, IPO, governance, and more for MSMEs and enterprises.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
