import { Project } from "@/types/project"

export default function ProjectLinksSection({ project }: { project: Project }) {

  if (!project.github && !project.demo &&!project.highlight) return null

  return (
    <div className="mt-10 flex flex-wrap gap-4">

      {project.github && (
        <a
          href={project.github}
          target="_blank"
          className="px-4 py-2 rounded-lg bg-card text-card-foreground hover:opacity-90"
        >
          View Source
        </a>
      )}

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-purple-700"
        >
          Live Demo
        </a>
      )}

      {project.highlight && (
        <a
          href={project.highlight}
          target="_blank"
          className="px-4 py-2 rounded-lg bg-card text-card-foreground hover:opacity-90"
        >
          View Blog About It
        </a>
      )}

    </div>
  )
}