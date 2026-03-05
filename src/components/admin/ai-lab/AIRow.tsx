"use client"

import Image from "next/image"
import { AIElement } from "@/types/ai-lab"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { Pencil, Trash } from "lucide-react"

function formatDate(date: string) {
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
  return (
    <tr className="border-b hover:bg-muted/40 transition">

      {/* AI Item */}
      <td className="p-4 flex items-center gap-4">

        <Image
          src={element.image}
          alt={element.title}
          width={60}
          height={40}
          className="rounded-md object-cover"
        />

        <div>

          <p className="font-medium">
            {element.title}
          </p>

          <p className="text-xs text-muted-foreground line-clamp-1 max-w-[320px]">
            {element.description}
          </p>

        </div>

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

      {/* Tech */}
      <td className="space-x-2">

        {element.tech.slice(0, 2).map((t) => (
          <Badge key={t} variant="outline">
            {t}
          </Badge>
        ))}

      </td>

      {/* Date */}
      <td className="text-muted-foreground">
        {formatDate(element.createdAt)}
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