import { projects } from "@/data/project"

import FeaturedProjectCard from "@/components/utils/project/FeaturedProjectCard"
import ProjectCard from "@/components/utils/project/ProjectCard"
import HeroProjects from "@/components/projects/HeaderSection"
import SectionHeader from "@/components/utils/SectionHeader"

export default function ProjectsPage() {

  const featuredProjects = projects.filter(
    (p) => p.visibility === "featured"
  )

  const otherProjects = projects.filter(
    (p) => p.visibility !== "featured"
  )

  return (
    <main className="bg-primary min-h-screen">
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
              key={project.id}
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

        <div
          className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >

          {otherProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </section>
    </div>

    </main>
  )
}