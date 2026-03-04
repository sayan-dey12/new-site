import BorderModern from "@/components/utils/BorderModern";
import SectionHeader from "../SectionHeader";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectData";

export default function FeaturedProjectsSection() {

  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section className="pb-5 bg-primary">

      <div className="max-w-7xl mx-auto px-5">

        <SectionHeader
          title="Featured Projects"
          subtitle="Selected projects demonstrating real-world engineering and product development."
          />

        {/* Featured */}
        {featured && (
          <FeaturedProjectCard project={featured} />
        )}

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 mt-10">
          {others.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>

      </div>
      <br /><br />
      <BorderModern/>
    </section>
  );
}