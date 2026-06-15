import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "TurboSites.io,Web Design for Small Businesses",
  description:
    "We build fast, modern websites that turn visitors into paying customers. Custom web design for small businesses, no templates, launched in 2 weeks.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full font-[var(--font-geist),Arial,sans-serif] antialiased">
        {children}
      </body>
    </html>
  );
}
