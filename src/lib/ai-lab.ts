import { AIElement } from "@/types/ai-lab"

export async function getAI(slug: string): Promise<AIElement | null> {
  try {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

    const res = await fetch(`${baseUrl}/api/ai-lab/${slug}`, {
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

    return data.data as AIElement

  } catch (error) {
    console.error("getAI error:", error)
    return null
  }
}