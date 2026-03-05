import ProjectHeader from "@/components/admin/projects/ProjectHeader"
import ProjectTable from "@/components/admin/projects/ProjectTable"

import { projects } from "@/data/project"

export default function ProjectsPage() {

  const projectList = projects.slice(0, 10) // simulate pagination

  return (
    <div className="space-y-8">

      <ProjectHeader />

      <ProjectTable projects={projectList} />

    </div>
  )
}