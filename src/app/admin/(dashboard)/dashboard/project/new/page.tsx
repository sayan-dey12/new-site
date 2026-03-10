import { ProjectEditor } from "@/components/projects/ProjectEditor";

export default function NewBlogPage() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Add New Project</h1>
        <ProjectEditor/>
    </div>
  )
}