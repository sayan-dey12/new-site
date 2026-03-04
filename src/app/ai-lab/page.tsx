import HeroAI from "@/components/ai-lab/HeaderSection"
import AboutAI from "@/components/ai-lab/AboutSection"
import BorderModern from "@/components/utils/BorderModern"
import ButtonsAI from "@/components/ai-lab/ButtonsSection"
import ExperimentCard from "@/components/ai-lab/ExperimentCard"
import AgentCard from "@/components/ai-lab/AgentCard"
import { Badge } from "@/components/ui/badge"
import { aiElements } from "@/data/ai-lab"
import ShowMore from "@/components/utils/ShowMore"
import { AIElement } from "@/types/ai-lab"
import ArchitectureSection from "@/components/ai-lab/ArchitectureSection"
import UpcomingSection from "@/components/ai-lab/UpcomingSection"

export default function AILabPage() {

    const experiments = aiElements.filter((el) =>
        ["experiment", "tool" , "research"].includes(el.category)
    )

  const agents = aiElements.filter(
    (el) => el.category === "agent"
  )

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-14">

      {/* HERO */}

      <section className="text-center space-y-6">
        <HeroAI />
        <ButtonsAI />
      </section>

      <BorderModern />

      {/* ABOUT */}

      <AboutAI />

      {/* EXPERIMENTS */}

      <section id="experiments" className="space-y-10 scroll-mt-20">

        <h2 className="text-3xl font-semibold text-center">
          Experiments & Tools
        </h2>

        <div>
        <ShowMore initialCount={3}>
          {experiments.map((exp) => (
            <ExperimentCard key={exp.id} aiElement={exp} />
          ))}
        </ShowMore>

        </div>

      </section>

      {/* AGENTS */}

      <section className="space-y-10">

        <h2 className="text-3xl font-semibold text-center">
          AI Agents
        </h2>

        <div>

          <ShowMore initialCount={3}>
          {agents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
          </ShowMore>

        </div>
   
      </section>
      <BorderModern/>

      {/* ARCHITECTURE */}

      <section className="space-y-8 text-center">
        <ArchitectureSection/>
      </section>

      <BorderModern/>

      {/* FUTURE */}

      <section className="space-y-6 text-center">
          <UpcomingSection/>
      </section>

    </main>
  )
}