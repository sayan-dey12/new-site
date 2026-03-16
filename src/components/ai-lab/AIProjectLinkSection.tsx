import { AIElement } from "@/types/ai-lab"

export default function AIProjectLinksSection({ aiElement }: { aiElement: AIElement }) {

  if (!aiElement.github && !aiElement.demo &&!aiElement.blog) return null

  return (
    <div className="mt-10 flex flex-wrap gap-4">

      {aiElement.github && (
        <a
          href={aiElement.github}
          target="_blank"
          className="px-4 py-2 rounded-lg bg-card text-card-foreground hover:opacity-90"
        >
          View Source
        </a>
      )}

      {aiElement.demo && (
        <a
          href={aiElement.demo}
          target="_blank"
          className="px-4 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-purple-700"
        >
          Live Demo
        </a>
      )}

      {aiElement.blog && (
        <a
          href={aiElement.blog}
          target="_blank"
          className="px-4 py-2 rounded-lg bg-card text-card-foreground hover:opacity-90"
        >
          View Blog About It
        </a>
      )}

    </div>
  )
}