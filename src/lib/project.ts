import { Project } from "@/types/project"

export async function getProject(slug: string): Promise<Project | null> {
  try {

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    const res = await fetch(`${baseUrl}/api/project/${slug}`, {
      cache: "no-store"
    })

    if (!res.ok) {
      console.error("Failed to fetch blog:", res.status)
      return null
    }

    const data = await res.json()

    if (!data.success) {
      console.error("API returned failure")
      return null
    }

    return data.data as Project

  } catch (error) {
    console.error("getBlog error:", error)
    return null
  }
}