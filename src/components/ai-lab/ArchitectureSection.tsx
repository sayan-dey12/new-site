import { Badge } from "@/components/ui/badge"
import { Cpu, Server, Brain, Globe } from "lucide-react"

export default function ArchitectureSection() {
  const layers = [
    {
      title: "Frontend Layer",
      description:
        "User interfaces and dashboards interacting with AI systems.",
      tech: ["Next.js", "React", "Tailwind"],
      icon: Globe,
    },
    {
      title: "Backend Services",
      description:
        "APIs and orchestration logic powering AI workflows.",
      tech: ["Node.js", "WebSockets", "REST APIs"],
      icon: Server,
    },
    {
      title: "AI / LLM Layer",
      description:
        "Core AI capabilities including reasoning and generation.",
      tech: ["OpenAI API", "Embeddings", "RAG"],
      icon: Brain,
    },
    {
      title: "Infrastructure",
      description:
        "Scalable systems and caching layers supporting AI workloads.",
      tech: ["Redis", "Docker", "Cloud"],
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