import { getProject } from "@/lib/project"
import { notFound } from "next/navigation"
import { ProjectEditor } from "@/components/projects/ProjectEditor"

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const project = await getProject(slug)

  if (!project) return notFound()

  return (
    <div className="max-w-7xl mx-auto py-10">

      <h1 className="text-3xl font-bold mb-8">
        Edit Project
      </h1>

    <ProjectEditor initialData={project}/>


    </div>
  )
}