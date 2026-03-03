import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectData";

export default function FeaturedProjectsSection() {

  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section className="py-24 bg-background">

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>

          <p className="text-muted-foreground mt-3">
            Selected projects demonstrating real-world
            engineering and product development.
          </p>
        </div>

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
    </section>
  );
}