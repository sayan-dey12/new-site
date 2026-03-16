"use client"

import { AIElement } from "@/types/ai-lab"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-hot-toast"

type Props = {
  aiElement: AIElement
}

export default function AIProjectAdminSection({ aiElement }: Props) {

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const deleteProject = async () => {
    if (!confirm("Delete this AI Element?")) return

    try {
      setLoading(true)

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai-lab/${aiElement.slug}`, {
        method: "DELETE"
      })

      if (!res.ok) {
        throw new Error("Failed to delete aiElement")
      }

      toast.success("AI Project deleted")

      router.push("/ai-lab")
      router.refresh()

    } catch (error) {
      console.error(error)
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const toggleFeatured = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai-lab/${aiElement.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          featured: !aiElement.featured
        })
      })

      if (!res.ok) {
        throw new Error("Failed to update AI Element")
      }

      toast.success(
        aiElement.featured ? "Removed from featured" : "Marked as featured"
      )

      router.refresh()

    } catch (error) {
      console.error(error)
      toast.error("Update failed")
    } finally {
      setLoading(false)
    }
  }

  const togglePublished = async () => {
    try {
      setLoading(true)

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai-lab/${aiElement.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          published: !aiElement.published
        })
      })

      if (!res.ok) {
        throw new Error("Failed to update publish status")
      }

      toast.success(
        aiElement.published ? "Project unpublished" : "Project published"
      )

      router.refresh()

    } catch (error) {
      console.error(error)
      toast.error("Update failed")
    } finally {
      setLoading(false)
    }
  }

  const editProject = () => {
    router.push(`/admin/ai-lab/edit/${aiElement.slug}`)
  }

  return (
    <div className="border-t mt-12 pt-6 pb-6 flex flex-wrap justify-center gap-4">

      <button
        disabled={loading}
        onClick={toggleFeatured}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50"
      >
        {aiElement.featured ? "Unfeature" : "Feature"}
      </button>

      <button
        disabled={loading}
        onClick={togglePublished}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      >
        {aiElement.published ? "Unpublish" : "Publish"}
      </button>

      <button
        disabled={loading}
        onClick={editProject}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Edit
      </button>

      <button
        disabled={loading}
        onClick={deleteProject}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
      >
        Delete
      </button>

    </div>
  )
}