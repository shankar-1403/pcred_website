import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Pcred Corporate Advisory Services",
  description:
    "Insights on MSME finance, funding strategies, debt advisory, and growth planning from Pcred's advisory experts.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
