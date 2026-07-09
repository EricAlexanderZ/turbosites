import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://turbosites.io/sitemap.xml",
    host: "https://turbosites.io",
  };
}
