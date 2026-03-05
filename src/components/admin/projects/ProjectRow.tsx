"use client"

import Image from "next/image"
import { Project } from "@/types/project"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { Pencil, Trash } from "lucide-react"

function formatDate(date?: string) {
  if (!date) return "-"
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}

interface Props {
  project: Project
}

export default function ProjectRow({ project }: Props) {
  return (
    <tr className="border-b hover:bg-muted/40 transition">

      {/* Project Info */}
      <td className="p-4 flex items-center gap-4">

        <Image
          src={project.image}
          alt={project.title}
          width={60}
          height={40}
          className="rounded-md object-cover"
        />

        <div>

          <p className="font-medium">
            {project.title}
          </p>

          <p className="text-xs text-muted-foreground line-clamp-1 max-w-75">
            {project.description}
          </p>

        </div>

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
        {project.visibility === "featured" ? (
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