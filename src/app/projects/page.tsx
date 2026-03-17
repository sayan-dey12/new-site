import { Project } from "@/types/project"
import FeaturedProjectCard from "@/components/utils/project/FeaturedProjectCard"
import ProjectCard from "@/components/utils/project/ProjectCard"
import HeroProjects from "@/components/projects/HeaderSection"
import SectionHeader from "@/components/utils/SectionHeader"
import ShowMore from "@/components/utils/ShowMore";
import { Metadata } from "next"

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Projects | Full Stack & AI Projects | Sayan Builds",

  description:
    "Explore full-stack, backend, and AI projects built by Sayan. Includes chat apps, system design projects, and scalable applications.",

  keywords: [
    "developer projects",
    "full stack projects",
    "AI projects",
    "system design projects",
    "Next.js projects",
    "backend projects",
    "portfolio projects",
  ],

  authors: [{ name: "Sayan Dey" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Projects | Sayan Builds",
    description:
      "Explore full-stack, backend, and AI projects built by Sayan.",
    url: `${baseUrl}/projects`,
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
    title: "Projects | Sayan Builds",
    description:
      "Explore full-stack, backend, and AI projects built by Sayan.",
    images: [`${baseUrl}/default.jpg`],
  },

  alternates: {
    canonical: `${baseUrl}/projects`,
  },
}


export default async function ProjectsPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project?`, {
        cache: "no-store"
      });
    
  const result = await res.json();
  const projects: Project[] = result?.data ?? [];

  const featuredProjects = projects.filter(
    (p) => p.featured === true
  )

  // const otherProjects = projects.filter(
  //   (p) => p.featured === false
  // )

  return (
    <main className="min-h-screen">
    <div className="max-w-6xl mx-auto px-6 py-6">

      {/* Hero Section */}

      <section className="text-center mb-16">

        <HeroProjects/>

      </section>


      {/* Featured Projects */}

      <section className="space-y-10">

        <div>

          <SectionHeader
            title="Featured Projects"
            subtitle="A selection of my most significant and impactful projects, showcasing my skills and expertise in various technologies and domains."
          />

        </div>

        <div className="space-y-10">

          {featuredProjects.map((project) => (
            <FeaturedProjectCard
              key={project._id}
              project={project}
            />
          ))}

        </div>

      </section>


      {/* All Projects */}

      <section className="space-y-10">

        <div>
          <SectionHeader
            title="All Projects"
            subtitle="A comprehensive list of all my projects, including both featured and non-featured ones, demonstrating the breadth and depth of my work across different technologies and domains."
          />

        </div>

        <div>

          <ShowMore initialCount={3}>
            {projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </ShowMore>

        </div>

      </section>
    </div>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",

          name: "Projects - Sayan Builds",
          description:
            "A collection of full-stack, backend, and AI projects built by Sayan.",

          url: `${baseUrl}/projects`,

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