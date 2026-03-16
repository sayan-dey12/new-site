import { Badge } from "@/components/ui/badge"
import { Lightbulb } from "lucide-react"
import { AIElement } from "@/types/ai-lab"
import Link from "next/link"


export default function UpcomingSection({
  aiElement,
}: {
  aiElement: AIElement[]
}) {


  return (
    <section className="space-y-12">

      <div className="text-center space-y-3">

        <h2 className="text-3xl font-semibold">
          Upcoming Experiments
        </h2>

        <p className="text-muted-foreground max-w-xl mx-auto">
          Future explorations planned for the AI Lab. These ideas
          push the boundaries of intelligent systems and automation.
        </p>

      </div>

      <div className="grid md:grid-cols-2 gap-6 ">
        

        {aiElement.map((idea) => (
          <Link key={idea.slug} href={`/ai-lab/${idea.slug}`} className="block">
          <div
            key={idea.title}
            className="rounded-xl border border-border bg-card shadow-md p-6 space-y-4 hover:shadow-lg transition hover:-translate-y-1"
          >
            

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">
                <Lightbulb size={18} />
                <h3 className="font-semibold">
                  {idea.title}
                </h3>
              </div>

              <Badge variant="secondary">
                Idea
              </Badge>

            </div>

            <p className="text-sm text-muted-foreground">
              {idea.excerpt}
            </p>

          </div>
          </Link>
        ))}
        

      </div>

    </section>
  )
}