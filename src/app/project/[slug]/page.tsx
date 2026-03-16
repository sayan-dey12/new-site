import { isAdmin } from "@/lib/auth"
import { notFound } from "next/navigation"
import { getProject } from "@/lib/project"
import AuthorSidebar from "@/components/blog/AuthorSidebar"
import ProjectMeta from "@/components/projects/ProjectMeta"
import ProjectAdminSection from "@/components/projects/ProjectAdminSection"


export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
    const { slug } = await params
    const project = await getProject(slug)
    if (!project) return notFound()
    const admin = await isAdmin()

    return(
        <div className="max-w-7xl mx-auto px-2 py-10 grid grid-cols-1 lg:grid-cols-5 gap-5">
        
              <div className="hidden lg:block"></div>
        
              <article className="lg:col-span-3">
        
                <h1 className="text-4xl font-bold mb-4 text-center">
                  {project.title}
                </h1>
        
                <ProjectMeta project={project} />
        
                {/* ADMIN SECTION */}
                {admin && (
                  <ProjectAdminSection project={project} />
                )}
        
                <BlogContent blog={blog} />
                
              </article>
        
              <aside className="lg:col-span-1 order-last lg:order-0">
        
                <div className="lg:sticky lg:top-24">
                  <AuthorSidebar />
                </div>
        
              </aside>
        
            </div>
    )
}