import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://turbosites.io"),
  title: {
    default: "TurboSites.io | Web Design for Small Businesses",
    template: "%s | TurboSites.io",
  },
  description:
    "Fast, modern, custom-built websites for small businesses in McAllen, Mission, Edinburg, Pharr, Brownsville and across the Rio Grande Valley. No templates. Launched in as little as 24 hours and built to turn visitors into paying customers.",
  keywords: [
    "web design", "web designer", "small business website",
    "web design McAllen", "web design Rio Grande Valley", "RGV web design",
    "web design Edinburg", "web design Mission TX", "web design Brownsville",
    "landing pages", "local SEO", "missed call text back",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://turbosites.io",
    siteName: "TurboSites.io",
    title: "TurboSites.io | Web Design for Small Businesses in the RGV",
    description:
      "Fast, custom-built websites for Rio Grande Valley small businesses. No templates. Launched in as little as 24 hours.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "TurboSites.io — Web Design for Small Businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TurboSites.io | Web Design for Small Businesses in the RGV",
    description:
      "Fast, custom-built websites for Rio Grande Valley small businesses. Launched in as little as 24 hours.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "Mwzb4pajeWOWhyV2-I6TPEGOnpWyJYNJIFkHqfVrVnk",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <body className="min-h-full font-[var(--font-geist),Arial,sans-serif] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "TurboSites.io",
              image: "https://turbosites.io/og.png",
              url: "https://turbosites.io",
              description:
                "Fast, custom-built websites for small businesses in the Rio Grande Valley. Launched in as little as 24 hours.",
              serviceType: "Web Design",
              priceRange: "$700 - $1,500",
              areaServed: [
                "McAllen, TX", "Mission, TX", "Edinburg, TX",
                "Pharr, TX", "Brownsville, TX", "Rio Grande Valley, TX",
              ],
              knowsAbout: ["Web Design", "Landing Pages", "Local SEO", "Missed Call Text Back"],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
