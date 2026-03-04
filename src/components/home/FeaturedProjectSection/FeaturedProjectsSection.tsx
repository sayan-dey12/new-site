import BorderModern from "@/components/utils/BorderModern";
import SectionHeader from "../SectionHeader";
import FeaturedProjectCard from "@/components/utils/project/FeaturedProjectCard";
import ProjectCard from "@/components/utils/project/ProjectCard";

import { projects } from "@/data/project"


export default function FeaturedProjectsSection() {

  const featuredProjects = projects.filter(
      (p) => p.visibility === "featured"
    )

  return (
    <section className="pb-5 bg-primary">

      <div className="max-w-7xl mx-auto px-5">

        <SectionHeader
          title="Featured Projects"
          subtitle="Selected projects demonstrating real-world engineering and product development."
          />

        {/* Featured */}
        <div className="space-y-10">
          {featuredProjects.map((project) => (
           <FeaturedProjectCard
              key={project.id}
              project={project}
            />
          ))}
          </div>
        


      </div>
      <br /><br />
      <BorderModern/>
    </section>
  );
}