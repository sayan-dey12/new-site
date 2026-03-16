import { Project } from "@/types/project"
import Image from "next/image"

function formatDate(date: Date | string) {
  const d = new Date(date)

  const day = d.getDate()
  const suffix =
    day % 10 === 1 && day !== 11 ? "st" :
    day % 10 === 2 && day !== 12 ? "nd" :
    day % 10 === 3 && day !== 13 ? "rd" :
    "th"

  const month = d.toLocaleString("default", { month: "short" })
  const year = d.getFullYear()

  return `${day}${suffix} ${month}, ${year}`
}

export default function ProjectMeta({ project }: { project: Project }) {

  return (
    <div className="flex items-center justify-center flex-wrap gap-3 text-md text-muted-foreground mb-8">

      {project.createdAt && (
        <>
          <span>{formatDate(project.createdAt)}</span>
        </>
      )}

      {project.category && (
        <>
          <span>•</span>
          <span className="px-2 py-0.5 bg-card border border-border rounded text-md">
            {project.category}
          </span>
        </>
      )}
       {project.status && (
        <>
          {/* <span>•</span> */}
          <span className="px-2 py-0.5 bg-card border border-border rounded text-md">
            {project.status}
          </span>
        </>
      )}
      <div className="flex flex-wrap gap-2">

        {project.tags?.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 border border-border bg-card rounded-full text-md"
          >
            #{tag}
          </span>
        ))}

      </div>

    </div>
  )
}