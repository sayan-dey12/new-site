import { MetadataRoute } from "next"

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://sayanbuilds.online"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",

        // 🚫 block private pages
        disallow: [
          "/admin",
          "/api",
        ],
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  }
}