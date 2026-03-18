import { Badge } from "@/components/ui/badge"
import { Cpu, Server, Brain, Globe } from "lucide-react"

export default function ArchitectureSection() {
  const layers = [
    {
      title: "Interface Layer",
      description:
        "User-facing interfaces where AI tools, chat systems, and experiments are interacted with in real-time.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      icon: Globe,
    },
    {
      title: "Orchestration Layer",
      description:
        "Handles request flow, prompt construction, API calls, and coordination between different AI components.",
      tech: ["Next.js API Routes", "Server Actions", "Node.js"],
      icon: Server,
    },
    {
      title: "AI Execution Layer",
      description:
        "Core intelligence powered by LLMs for reasoning, generation, and tool-based workflows.",
      tech: ["OpenAI API", "Prompt Engineering", "Function Calling"],
      icon: Brain,
    },
    {
      title: "Memory & Infrastructure",
      description:
        "Manages state, caching, and scalability for AI interactions and real-time systems.",
      tech: ["Redis (Aiven)", "WebSockets", "Vercel"],
      icon: Cpu,
    },
  ]

  return (
    <section className="space-y-12">

      <div className="text-center space-y-3">
        <h2 className="text-3xl font-semibold">
          AI System Architecture
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Most AI experiments in this lab follow a layered architecture
          combining interfaces, backend orchestration, AI models,
          and scalable infrastructure.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {layers.map((layer) => {
          const Icon = layer.icon

          return (
            <div
              key={layer.title}
              className="rounded-xl border border-border shadow-md bg-card p-6 space-y-4 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-secondary">
                  <Icon size={20} />
                </div>

                <h3 className="font-semibold text-lg">
                  {layer.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground">
                {layer.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {layer.tech.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )
        })}

      </div>
    </section>
  )
}