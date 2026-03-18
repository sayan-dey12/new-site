import { MetadataRoute } from "next"
import { AIElement } from "@/types/ai-lab"
import { BlogType } from "@/types/blog"
import { Project } from "@/types/project"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://sayanbuilds.online"

  try {
    const [blogsRes, aiRes, projectsRes] = await Promise.all([
      fetch(`${baseUrl}/api/blog`, { cache: "no-store" }),
      fetch(`${baseUrl}/api/ai-lab`, { cache: "no-store" }),
      fetch(`${baseUrl}/api/project`, { cache: "no-store" }),
    ])

    const blogs = await blogsRes.json()
    const ai = await aiRes.json()
    const projects = await projectsRes.json()

    return [
      // 🔹 Static pages
      {
        url: `${baseUrl}`,
        lastModified: new Date(),
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/ai-lab`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/blogs`,
        lastModified: new Date(),
      },
      {
        url: `${baseUrl}/connect`,
        lastModified: new Date(),
      },

      // 🔹 Blogs
      ...(blogs.data || []).map((blog: BlogType) => ({
        url: `${baseUrl}/blog/${blog.slug}`, // ⚠️ confirm route
        lastModified: blog.updatedAt || new Date(),
      })),

      // 🔹 AI Lab
      ...(ai.data || []).map((item: AIElement) => ({
        url: `${baseUrl}/ai-lab/${item.slug}`,
        lastModified: item.updatedAt || new Date(),
      })),

      // 🔹 Projects
      ...(projects.data || []).map((item: Project) => ({
        url: `${baseUrl}/project/${item.slug}`, // ⚠️ confirm route
        lastModified: item.updatedAt || new Date(),
      })),
    ]
  } catch (error) {
    console.error("Sitemap generation failed:", error)

    return [
      {
        url: `${baseUrl}`,
        lastModified: new Date(),
      },
    ]
  }
}