import { AIElement } from "@/types/ai-lab"

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

export default function AIProjectMeta({ AIElement }: { AIElement : AIElement }) {

  return (
    <div className="flex items-center justify-center flex-wrap gap-3 text-md text-muted-foreground mb-8">

      {AIElement.createdAt && (
        <>
          <span>{formatDate(AIElement.createdAt)}</span>
        </>
      )}

      {AIElement.category && (
        <>
          <span>•</span>
          <span className="px-2 py-0.5 bg-card border border-border rounded text-xl">
            {AIElement.category}
          </span>
        </>
      )}
       {AIElement.status && (
        <>
          {/* <span>•</span> */}
          <span className="px-2 py-0.5 bg-card border border-border rounded text-md">
            {AIElement.status}
          </span>
        </>
      )}
      <div className="flex flex-wrap gap-2">

        {AIElement.tags?.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 border border-border bg-card rounded-full text-md"
          >
            #{tag}
          </span>
        ))}

      </div>

      <div className="flex flex-wrap gap-2">

        {AIElement.tech?.map(t => (
          <span
            key={t}
            className="px-3 py-1 border border-border bg-card rounded-full text-md"
          >
            {t}
          </span>
        ))}

      </div>

    </div>
  )
}