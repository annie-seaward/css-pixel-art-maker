import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CSSPixelify | CSS Pixel Art Maker",
  description: "CSSPixelify is a CSS Pixel Art Maker. Draw pixel art and generate single div CSS art!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-slate-950`}>{children}</body>
    </html>
  );
}
