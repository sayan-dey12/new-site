"use client"

import { useRouter } from "next/navigation"
import { BlogType } from "@/types/blog"

export default function AdminControls({ blog }: { blog: BlogType }) {

  const router = useRouter()

  const deleteBlog = async () => {

    const confirmDelete = confirm("Delete this blog?")

    if (!confirmDelete) return

    const res = await fetch(`/api/blog/${blog.slug}`, {
      method: "DELETE"
    })

    if (res.ok) {
      router.push("/blog")
      router.refresh()
    }
  }

  const toggleFeatured = async () => {

    await fetch(`/api/blog/${blog.slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        featured: !blog.featured
      })
    })

    router.refresh()
  }

  return (
    <div className="flex gap-3 mt-10 justify-center">

      <button
        onClick={() => router.push(`/admin/edit/${blog.slug}`)}
        className="px-4 py-2 rounded bg-blue-500 text-white"
      >
        Edit
      </button>

      <button
        onClick={deleteBlog}
        className="px-4 py-2 rounded bg-red-500 text-white"
      >
        Delete
      </button>

      <button
        onClick={toggleFeatured}
        className="px-4 py-2 rounded bg-yellow-500 text-white"
      >
        {blog.featured ? "Unfeature" : "Feature"}
      </button>

    </div>
  )
}