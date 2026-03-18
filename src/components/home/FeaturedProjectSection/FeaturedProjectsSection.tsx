import SectionHeader from "../SectionHeader";
import { Project } from "@/types/project";
import ViewAllButton from "@/components/utils/ViewAllButton";
import FeaturedProjectsCarousel from "./FeaturedProjectCarousel";

export default async function FeaturedProjectsSection() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/project?`,
    { cache: "no-store" }
  );

  const result = await res.json();
  const projects: Project[] = result?.data ?? [];

  const featuredProjects = projects.filter(
    (p) => p.featured === true
  );

  if (featuredProjects.length === 0) return null;

  return (
    <section className="pb-2">
      <div className="max-w-6xl mx-auto px-5">
        <SectionHeader
          title="Featured Projects"
          subtitle="Selected projects demonstrating real-world engineering and product development."
        />

        {/* 🔥 Carousel */}
        <FeaturedProjectsCarousel projects={featuredProjects} />
      </div>

      <ViewAllButton href="/projects" label="View All Projects" />
      <br /><br />
    </section>
  );
}