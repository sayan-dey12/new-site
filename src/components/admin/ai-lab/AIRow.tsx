"use client"

import Image from "next/image"
import { AIElement } from "@/types/ai-lab"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { Pencil, Trash } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"



function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

interface Props {
  element: AIElement
}

export default function AIRow({ element }: Props) {

  const router = useRouter()

  const deleteAIProject = async () => {

    const confirmDelete = confirm("Delete this AI project?")

    if (!confirmDelete) return

    try {

      const res = await fetch(`/api/project/${element.slug}`, {
        method: "DELETE"
      })

      if (!res.ok) {
        throw new Error("Failed to delete ai project")
      }

      router.refresh()

    } catch (error) {

      console.error(error)
      alert("Delete failed")

    }
  }


  return (
    <tr className="border-b hover:bg-muted/40 transition">

      {/* AI Item */}
      <td className="p-4 flex items-center gap-4">
      <Link href={`/ai-lab/${element.slug}`} className="flex items-center gap-4">
        <Image
          src={element.coverImage}
          alt={element.title}
          width={60}
          height={40}
          className="rounded-md object-cover"
        />

        <div>

          <p className="font-medium hover:underline">
            {element.title}
          </p>

          <p className="text-xs text-muted-foreground line-clamp-1 max-w-72">
            {element.excerpt}
          </p>

        </div>
        </Link>

      </td>

      {/* Category */}
      <td>
        <Badge variant="secondary">
          {element.category}
        </Badge>
      </td>

      {/* Status */}
      <td>
        <Badge
          variant={
            element.status === "completed"
              ? "default"
              : element.status === "building"
              ? "secondary"
              : "outline"
          }
        >
          {element.status}
        </Badge>
      </td>

      {/*  published */}
      <td className="space-x-2">

        {element.published ? (
          <Badge className="bg-green-600 hover:bg-green-600">
            Published
          </Badge>
        ) : (
          <Badge variant="outline">
            Draft
          </Badge>
        )}

      </td>

      {/* Featured */}

      <td className="space-x-2">

        {element.featured ? (
          <Badge className="bg-green-600 hover:bg-green-600">
            Featured
          </Badge>
        ) : (
          <Badge variant="outline">
            Normal
          </Badge>
        )}

      </td>

      {/* Date */}
      <td className="text-muted-foreground">
        {formatDate(element.createdAt)}
      </td>

     {/* Actions */}
      <td className="flex justify-end gap-2 p-4">

        {/* Edit */}

        <Button
          size="icon"
          variant="outline"
          onClick={() => router.push(`/admin/ai-lab/edit/${element.slug}`)}
        >
          <Pencil size={16} />
        </Button>

        {/* Delete */}

        <Button
          size="icon"
          variant="destructive"
          onClick={deleteAIProject}
        >
          <Trash size={16} />
        </Button>

      </td>
 
    </tr>
  )
}