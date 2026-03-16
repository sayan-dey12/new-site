"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Project } from "@/types/project"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Pencil, Trash } from "lucide-react"

interface Props {
  project: Project
}

function formatDate(date?: string | Date) {
  if (!date) return "-"

  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

export default function ProjectRow({ project }: Props) {

  const router = useRouter()

  const deleteProject = async () => {

    const confirmDelete = confirm("Delete this project?")

    if (!confirmDelete) return

    try {

      const res = await fetch(`/api/project/${project.slug}`, {
        method: "DELETE"
      })

      if (!res.ok) {
        throw new Error("Failed to delete project")
      }

      router.refresh()

    } catch (error) {

      console.error(error)
      alert("Delete failed")

    }
  }

  return (
    <tr className="border-b hover:bg-muted/40 transition">

      {/* Project Info */}
      <td className="p-4">

        <Link
          href={`/project/${project.slug}`}
          className="flex items-center gap-4"
        >

          <Image
            src={project.coverImage}
            alt={project.title}
            width={60}
            height={40}
            className="rounded-md object-cover"
          />

          <div>

            <p className="font-medium hover:underline">
              {project.title}
            </p>

            {project.excerpt && (
              <p className="text-xs text-muted-foreground line-clamp-1 max-w-72">
                {project.excerpt}
              </p>
            )}

          </div>

        </Link>

      </td>

      {/* Category */}
      <td>
        <Badge variant="secondary">
          {project.category}
        </Badge>
      </td>

      {/* Status */}
      <td>

        <Badge
          variant={
            project.status === "completed"
              ? "default"
              : project.status === "in-progress"
              ? "secondary"
              : "outline"
          }
        >
          {project.status}
        </Badge>

      </td>

      {/* Visibility */}
      <td>

        {project.featured ? (
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
        {formatDate(project.createdAt)}
      </td>

      {/* Actions */}
      <td className="flex justify-end gap-2 p-4">

        {/* Edit */}

        <Button
          size="icon"
          variant="outline"
          onClick={() => router.push(`/admin/project/edit/${project.slug}`)}
        >
          <Pencil size={16} />
        </Button>

        {/* Delete */}

        <Button
          size="icon"
          variant="destructive"
          onClick={deleteProject}
        >
          <Trash size={16} />
        </Button>

      </td>

    </tr>
  )
}