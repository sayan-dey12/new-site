import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeroAI from "@/components/ai-lab/HeaderSection"
import AboutAI from "@/components/ai-lab/AboutSection"
import BorderModern from "@/components/utils/BorderModern"
import ButtonsAI from "@/components/ai-lab/ButtonsSection"

const experiments = [
  {
    title: "AI Tool Platform",
    description:
      "A unified platform combining chat AI, image generation and developer tools in one place.",
    tech: ["Next.js", "OpenAI API", "Redis", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Coding Assistant",
    description:
      "An AI assistant that analyzes code, explains bugs, and suggests improvements.",
    tech: ["LLM", "Node.js", "AST Analysis"],
    github: "#",
    demo: "#",
  },
  {
    title: "Multi-Agent Task System",
    description:
      "A system where multiple AI agents collaborate to solve complex tasks.",
    tech: ["Agents", "OpenAI", "Task Planning"],
    github: "#",
    demo: "#",
  },
]

const agents = [
  {
    name: "Research Agent",
    description:
      "Searches the web, collects sources, and summarizes key insights.",
  },
  {
    name: "Coding Agent",
    description:
      "Understands codebases and suggests improvements or fixes.",
  },
  {
    name: "Task Automation Agent",
    description:
      "Breaks down large problems into smaller tasks and executes them.",
  },
]

export default function AILabPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-10">

      {/* HERO SECTION */}

      <section className="text-center space-y-6">
        
                <HeroAI/>
                <ButtonsAI/>
      </section>
      <BorderModern/>

      {/* ABOUT SECTION */}

      <AboutAI/>

      {/* EXPERIMENTS */}

      <section id="experiments" className="space-y-10 scroll-mt-20">
        <h2 className="text-3xl font-semibold text-center">
          Experiments & Tools
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <div
              key={i}
              className="rounded-xl border bg-card p-6 space-y-4 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>

              <p className="text-sm text-muted-foreground">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-3 pt-2">
                <Button size="sm">Demo</Button>
                <Button size="sm" variant="outline">
                  GitHub
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENTS */}

      <section className="space-y-10">
        <h2 className="text-3xl font-semibold text-center">
          AI Agents
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <div
              key={i}
              className="border rounded-xl p-6 bg-card space-y-3"
            >
              <h3 className="font-semibold text-lg">{agent.name}</h3>

              <p className="text-sm text-muted-foreground">
                {agent.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}

      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-semibold">
          AI System Architecture
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Most experiments follow a layered architecture combining
          frontend interfaces, backend APIs, AI models, and
          agent-based systems.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Badge>Frontend – Next.js</Badge>
          <Badge>Backend – Node.js</Badge>
          <Badge>LLM – OpenAI API</Badge>
          <Badge>Realtime – WebSockets</Badge>
          <Badge>Cache – Redis</Badge>
          <Badge>Infra – Docker</Badge>
        </div>
      </section>

      {/* FUTURE */}

      <section className="space-y-6 text-center">
        <h2 className="text-3xl font-semibold">
          Upcoming Experiments
        </h2>

        <ul className="space-y-2 text-muted-foreground">
          <li>Autonomous coding agents</li>
          <li>AI DevOps assistant</li>
          <li>Multi-agent collaboration systems</li>
          <li>AI research assistant</li>
        </ul>
      </section>

    </main>
  )
}