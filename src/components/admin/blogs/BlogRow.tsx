"use client"

import Image from "next/image"
import { BlogType } from "@/types/blog"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Pencil, Trash } from "lucide-react"

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

interface Props {
  blog: BlogType
}

export default function BlogRow({ blog }: Props) {
  return (
    <tr className="border-b hover:bg-muted/40 transition">

      {/* Blog */}
      <td className="p-4 flex items-center gap-4">

        {blog.coverImage && (
          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={60}
            height={40}
            className="rounded-md object-cover"
          />
        )}

        <div>

          <p className="font-medium">
            {blog.title}
          </p>

          {blog.excerpt && (
            <p className="text-xs text-muted-foreground line-clamp-1">
              {blog.excerpt}
            </p>
          )}

        </div>

      </td>

      {/* Tags */}
      <td className="space-x-2">

        {blog.tags?.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}

      </td>

      {/* Author */}
      <td className="text-muted-foreground">
        {blog.authorName}
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

        <Button size="icon" variant="outline">
          <Pencil size={16} />
        </Button>

        <Button size="icon" variant="destructive">
          <Trash size={16} />
        </Button>

      </td>

    </tr>
  )
}