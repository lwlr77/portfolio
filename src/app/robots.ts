import { baseURL } from "@/resources";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"], // Allow them to see the homepage
        disallow: [
          "/api/", // Prevent bots from hitting your API routes
          "/_next/", // Prevent bots from crawling internal Next.js files
          "/admin", // Good practice even if it doesn't exist
        ],
      },
      {
        // Block particularly aggressive scrapers entirely
        userAgent: ["GPTBot", "CCBot", "ImagesiftBot"],
        disallow: "/",
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
