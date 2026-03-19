import { Project } from "@/types/project"
import Image from "next/image"


export default function ProjectCoverExpert({ project }: { project: Project }){
    return(
        <>
        {project.coverImage && (
              <div className="relative w-full aspect-video sm:aspect-video md:aspect-21/9 rounded-sm overflow-hidden mb-8 ">
                <Image
                  src={project.coverImage}
                  alt={project.title || "Project cover"}
                  fill
                  className="object-contain md:object-cover"
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