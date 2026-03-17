import HeroAI from "@/components/ai-lab/HeaderSection"
import AboutAI from "@/components/ai-lab/AboutSection"
import BorderModern from "@/components/utils/BorderModern"
import ButtonsAI from "@/components/ai-lab/ButtonsSection"
import ExperimentCard from "@/components/ai-lab/ExperimentCard"
import AgentCard from "@/components/ai-lab/AgentCard"
import { AIElement } from "@/types/ai-lab"
import ShowMore from "@/components/utils/ShowMore"
import ArchitectureSection from "@/components/ai-lab/ArchitectureSection"
import UpcomingSection from "@/components/ai-lab/UpcomingSection"
import { Metadata } from "next"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  title: "AI Lab | Free AI Tools & Experiments | Sayan Builds",

  description:
    "Explore AI tools, experiments, and intelligent agents built by Sayan. Try chatbots, automation tools, and cutting-edge AI projects.",

  keywords: [
    "AI tools",
    "free AI tools",
    "AI experiments",
    "AI agents",
    "machine learning projects",
    "developer AI tools",
    "Research on AI",
  ],

  authors: [{ name: "Sayan Dey" }],

  robots: {
    index: true,
    follow: true,
  },

  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  ),

  openGraph: {
    title: "AI Lab | Sayan Builds",
    description:
      "Explore AI tools, experiments, and intelligent agents built by Sayan.",
    url: "/ai-lab",
    siteName: "Sayan Builds",
    images: [
      {
        url: `${baseUrl}/default.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Lab | Sayan Builds",
    description:
      "Explore AI tools, experiments, and intelligent agents built by Sayan.",
    images: ["/default.jpg"],
  },

  alternates: {
    canonical: `${baseUrl}/ai-lab`,
  },
}

export default async function AILabPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai-lab`, {
      cache: "no-store"
    });
  
    const result = await res.json();
    const aiElements : AIElement[] = result.data || [];

    const experiments = aiElements.filter((el) =>
        ["experiment", "tool" , "research"].includes(el.category)
    )

  const agents = aiElements.filter(
    (el) => el.category === "agent"
  )

  const ideas = aiElements.filter((el)=> el.status === "idea" )

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
            <ExperimentCard key={exp._id} aiElement={exp} />
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
            <AgentCard key={agent._id} aiElement={agent} />
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
          <UpcomingSection aiElement={ideas}/>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",

            name: "AI Lab - Sayan Builds",
            description:
              "A collection of AI tools, experiments, and intelligent agents built by Sayan.",

            url: `${
              process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
            }/ai-lab`,

            inLanguage: "en",

            author: {
              "@type": "Person",
              name: "Sayan Dey",
            },

            publisher: {
              "@type": "Organization",
              name: "Sayan Builds",
            },
          }),
        }}
      />

    </main>
  )
}
