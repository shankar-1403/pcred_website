import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/src/context/AuthContext";
import { FontSizeProvider } from "@/src/context/FontSizeContext";
import LayoutContent from "@/components/LayoutContent";
import SmoothScroll from "@/components/SmoothScroll";

// Applied before hydration so a returning visitor's saved font-size preference
// is visible on first paint, with no flash back to the default "medium" size.
const setInitialFontSizeScript = `
(function () {
  try {
    var stored = localStorage.getItem("pcred_font_size_v1");
    if (stored === "small" || stored === "medium" || stored === "large") {
      document.documentElement.setAttribute("data-font-size", stored);
    }
  } catch (e) {}
})();
`;

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

export const metadata: Metadata = {
  title: "PCRED | Corporate Advisory",
  description:
    "Strategic financial advisory for capital raising, debt structuring, M&A, valuation, CFO support and governance across India.",
  icons: {
    icon: "/logo.png?v=2",
    shortcut: "/logo.png?v=2",
    apple: "/logo.png?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-font-size="medium"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", "font-sans", plusJakartaSans.variable, fraunces.variable)}
    >
        <body className="min-h-full flex flex-col">
          <Script
            id="set-initial-font-size"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: setInitialFontSizeScript }}
          />
          <FontSizeProvider>
            <AuthProvider>
              <SmoothScroll />
              <LayoutContent>{children}</LayoutContent>
            </AuthProvider>
          </FontSizeProvider>
        </body>
    </html>
  );
}
