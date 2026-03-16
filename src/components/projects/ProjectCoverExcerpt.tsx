import { Project } from "@/types/project"
import Image from "next/image"


export default function ProjectCoverExpert({ project }: { project: Project }){
    return(
        <>
        {project.coverImage && (
              <div className="relative w-full h-100 mb-8">
                <Image
                  src={project.coverImage}
                  alt={project.title || "Project cover"}
                  fill
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            )}
        
              {project.excerpt && (
                <p className="text-lg text-muted-foreground mb-8">
                  {project.excerpt}
                </p>
              )}
        </>
    )
}