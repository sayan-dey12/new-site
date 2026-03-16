import Image from "next/image"
import { Project } from "@/types/project"

export default function ProjectMediaSection({ project }: { project: Project }) {

  if (!project.images?.length && !project.video) return null

  return (
    <div className="mt-12 space-y-6">

      <h2 className="text-2xl font-semibold">
        Media
      </h2>

      {/* Images */}
      {project.images?.length && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {project.images.map((img) => (
            <div key={img} className="relative w-full h-64">

              <Image
                src={img}
                alt={project.title}
                fill
                className="object-cover rounded-lg"
              />

            </div>
          ))}

        </div>
      )}

      {/* Video */}
      {project.video && (
        <div className="aspect-video">

          <iframe
            src={project.video}
            className="w-full h-full rounded-lg"
            allowFullScreen
          />

        </div>
      )}

    </div>
  )
}