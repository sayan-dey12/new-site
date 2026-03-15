//import BorderModern from "@/components/utils/BorderModern";
import SectionHeader from "../SectionHeader";
import FeaturedProjectCard from "@/components/utils/project/FeaturedProjectCard";
//import ProjectCard from "@/components/utils/project/ProjectCard";
import { Project } from "@/types/project";
import ViewAllButton from "@/components/utils/ViewAllButton";


export default async function FeaturedProjectsSection() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project?`, {
      cache: "no-store"
    });
  
  const result = await res.json();
  const projects: Project[] = result?.data ?? [];
  const featuredProjects = projects.filter(
      (p) => p.featured === true
    )

  return (
    <section className="pb-5">

      <div className="max-w-7xl mx-auto px-5">

        <SectionHeader
          title="Featured Projects"
          subtitle="Selected projects demonstrating real-world engineering and product development."
          />

        {/* Featured */}
        <div className="space-y-10">
          {featuredProjects.map((project) => (
           <FeaturedProjectCard
              key={project._id}
              project={project}
            />
          ))}
          </div>
        


      </div>
      <ViewAllButton href="/projects" label="View All Projects"/>
      <br /><br />
      {/* <BorderModern/> */}
    </section>
  );
}