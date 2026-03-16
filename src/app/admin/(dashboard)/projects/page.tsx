import ProjectHeader from "@/components/admin/projects/ProjectHeader"
import ProjectTable from "@/components/admin/projects/ProjectTable"
import { Project } from "@/types/project"

export default async function ProjectsPage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project?all=true`, {
        cache: "no-store"
      });
    
      const result = await res.json();
      const projects: Project[] = result.data || [];
  return (
    <div className="space-y-8">

      <ProjectHeader />

      <ProjectTable projects={projects} />

    </div>
  )
}