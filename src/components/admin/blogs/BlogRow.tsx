"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { BlogType } from "@/types/blog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Pencil, Trash } from "lucide-react"

interface Props {
  blog: BlogType
}

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export default function BlogRow({ blog }: Props) {

  const router = useRouter()

  const deleteBlog = async () => {

    const confirmDelete = confirm("Delete this blog?")

    if (!confirmDelete) return

    try {

      const res = await fetch(`/api/blog/${blog.slug}`, {
        method: "DELETE"
      })

      if (!res.ok) {
        throw new Error("Failed to delete blog")
      }

      router.refresh()

    } catch (error) {
      console.error(error)
      alert("Delete failed")
    }
  }

  return (
    <tr className="border-b hover:bg-muted/40 transition">

      {/* Blog */}
      <td className="p-4">

        <Link
          href={`/blog/${blog.slug}`}
          className="flex items-center gap-4"
        >

          {blog.cover && (
            <Image
              src={blog.cover}
              alt={blog.title}
              width={60}
              height={40}
              className="rounded-md object-cover"
            />
          )}

          <div>

            <p className="font-medium hover:underline">
              {blog.title}
            </p>

            {blog.excerpt && (
              <p className="text-xs text-muted-foreground line-clamp-1">
                {blog.excerpt}
              </p>
            )}

          </div>

        </Link>

      </td>

      {/* Tags */}
      <td className="space-x-2">

        {blog.tags?.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}

      </td>

      {/* Date */}
      <td className="text-muted-foreground">
        {formatDate(blog.createdAt)}
      </td>

      {/* Status */}
      <td>

        {blog.published ? (
          <Badge className="bg-green-600 hover:bg-green-600">
            Published
          </Badge>
        ) : (
          <Badge variant="secondary">
            Draft
          </Badge>
        )}

      </td>

      {/* Actions */}
      <td className="flex justify-end gap-2 p-4">

        {/* Edit */}

        <Button
          size="icon"
          variant="outline"
          onClick={() => router.push(`/admin/blog/edit/${blog.slug}`)}
        >
          <Pencil size={16} />
        </Button>

        {/* Delete */}

        <Button
          size="icon"
          variant="destructive"
          onClick={deleteBlog}
        >
          <Trash size={16} />
        </Button>

      </td>

    </tr>
  )
}