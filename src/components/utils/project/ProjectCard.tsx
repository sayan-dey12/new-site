import Image from "next/image"
import Link from "next/link"

import { Project } from "@/types/project"

import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import { Github, ExternalLink } from "lucide-react"

type ProjectCardProps = {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className="
      group
      overflow-hidden
      transition
      duration-300
      hover:shadow-lg
      hover:-translate-y-1
      px-1.5
    "
    >

      {/* Image (clickable) */}

      <Link
        href={`/project/${project.slug}`}
        className="relative aspect-video w-full overflow-hidden block"
      >
        <Image
          src={project.coverImage || "/images/fallback.png"}
          alt={project.title}
          fill
          className="
          object-cover
          transition
          duration-300
          group-hover:scale-105
          rounded-2xl
          "
        />
      </Link>

      {/* Content */}

      <CardHeader>

        <div className="flex gap-2 flex-wrap mb-2">

          <Badge variant="secondary">
            {project.category}
          </Badge>

          <Badge variant="outline">
            {project.status}
          </Badge>

        </div>

        {/* Title clickable */}

        <Link href={`/project/${project.slug}`}>
          <CardTitle className="text-lg hover:underline">
            {project.title}
          </CardTitle>
        </Link>

        <CardDescription className="text-sm">
          {project.excerpt}
        </CardDescription>

      </CardHeader>

      {/* Tags */}

      <CardContent className="flex flex-wrap gap-2">

        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}

      </CardContent>

      {/* External Links */}

      <CardFooter className="flex gap-3">

        {project.github && (
          <Button asChild variant="outline" size="sm">
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Link>
          </Button>
        )}

        {project.demo && (
          <Button asChild size="sm">
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Link>
          </Button>
        )}

      </CardFooter>

    </Card>
  )
}