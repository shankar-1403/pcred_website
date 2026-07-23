import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/src/context/AuthContext";
import { FontSizeProvider } from "@/src/context/FontSizeContext";
import LayoutContent from "@/components/LayoutContent";

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

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pcred Corporate Advisory Services | Empowering Financial Excellence",
  description: "pcred.org",
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
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
        <body className="min-h-full flex flex-col">
          <Script
            id="set-initial-font-size"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{ __html: setInitialFontSizeScript }}
          />
          <FontSizeProvider>
            <AuthProvider>
              <LayoutContent>{children}</LayoutContent>
            </AuthProvider>
          </FontSizeProvider>
        </body>
    </html>
  );
}
