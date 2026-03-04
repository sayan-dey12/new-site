import { Badge } from "@/components/ui/badge"
import { Lightbulb } from "lucide-react"

export default function UpcomingSection() {

  const ideas = [
    {
      title: "Autonomous Coding Agent",
      description:
        "An AI agent capable of writing, debugging, and improving code autonomously.",
    },
    {
      title: "AI DevOps Assistant",
      description:
        "A system that monitors deployments, logs, and infrastructure issues using AI analysis.",
    },
    {
      title: "Multi-Agent Collaboration",
      description:
        "Multiple AI agents collaborating to plan and execute complex workflows.",
    },
    {
      title: "AI Research Assistant",
      description:
        "A research-focused AI system that gathers papers, summarizes knowledge, and generates insights.",
    },
  ]

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

        {ideas.map((idea) => (
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
              {idea.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}