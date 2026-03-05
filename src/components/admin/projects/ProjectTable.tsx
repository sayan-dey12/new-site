import { Project } from "@/types/project"
import ProjectRow from "./ProjectRow"

interface Props {
  projects: Project[]
}

export default function ProjectTable({ projects }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-muted border-b">
          <tr className="text-left">

            <th className="p-4">Project</th>
            <th>Category</th>
            <th>Status</th>
            <th>Visibility</th>
            <th>Date</th>
            <th className="text-right pr-6">Actions</th>

          </tr>
        </thead>

        <tbody>

          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
            />
          ))}

        </tbody>

      </table>

    </div>
  )
}