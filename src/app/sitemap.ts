import type { MetadataRoute } from "next";
import { getSitemapData } from "@/lib/sitemapData";

export const runtime = "nodejs";
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://sayanbuilds.online";

  try {
    const { blogs, projects, aiElements } = await getSitemapData();

    return [
      // Static pages
      {
        url: baseUrl,
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
      },
      {
        url: `${baseUrl}/projects`,
      },
      {
        url: `${baseUrl}/ai-lab`,
      },
      {
        url: `${baseUrl}/blogs`,
      },
      {
        url: `${baseUrl}/connect`,
      },

      // Blogs
      ...blogs.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: blog.updatedAt,
      })),

      // AI Lab
      ...aiElements.map((item) => ({
        url: `${baseUrl}/ai-lab/${item.slug}`,
        lastModified: item.updatedAt,
      })),

      // Projects
      ...projects.map((project) => ({
        url: `${baseUrl}/project/${project.slug}`,
        lastModified: project.updatedAt,
      })),
    ];
  } catch (error) {
    console.error("Sitemap generation failed:", error);

    return [
      {
        url: baseUrl,
        priority: 1,
      },
    ];
  }
}