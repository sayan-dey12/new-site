"use client"

import { BlogType } from "@/types/blog"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-hot-toast"

type Props = {
  blog: BlogType
}

export default function BlogAdminSection({ blog }: Props) {

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const deleteBlog = async () => {
    if (!confirm("Delete this blog?")) return

    try {
      setLoading(true)

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${blog.slug}`, {
        method: "DELETE"
      })

      if (!res.ok) {
        throw new Error("Failed to delete blog")
      }

      toast.success("Blog deleted")

      router.push("/blogs")
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

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${blog.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          featured: !blog.featured
        })
      })

      if (!res.ok) {
        throw new Error("Failed to update blog")
      }

      toast.success(
        blog.featured ? "Removed from featured" : "Marked as featured"
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

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${blog.slug}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          published: !blog.published
        })
      })

      if (!res.ok) {
        throw new Error("Failed to update publish status")
      }

      toast.success(
        blog.published ? "Blog unpublished" : "Blog published"
      )

      router.refresh()

    } catch (error) {
      console.error(error)
      toast.error("Update failed")
    } finally {
      setLoading(false)
    }
  }

  const editBlog = () => {
    router.push(`/admin/edit/${blog.slug}`)
  }

  return (
    <div className="border-t mt-12 pt-6 pb-6 flex flex-wrap justify-center gap-4">

      <button
        disabled={loading}
        onClick={toggleFeatured}
        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50"
      >
        {blog.featured ? "Unfeature" : "Feature"}
      </button>

      <button
        disabled={loading}
        onClick={togglePublished}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
      >
        {blog.published ? "Unpublish" : "Publish"}
      </button>

      <button
        disabled={loading}
        onClick={editBlog}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        Edit
      </button>

      <button
        disabled={loading}
        onClick={deleteBlog}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
      >
        Delete
      </button>

    </div>
  )
}