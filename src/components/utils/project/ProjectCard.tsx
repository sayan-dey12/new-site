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
    "
    >
      {/* Image */}

      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={project.image}
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
      </div>

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

        <CardTitle className="text-lg">
          {project.title}
        </CardTitle>

        <CardDescription className="text-sm">
          {project.description}
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

      {/* Links */}

      <CardFooter className="flex gap-3">

        {project.github && (
          <Button asChild variant="outline" size="sm">
            <Link href={project.github} target="_blank">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Link>
          </Button>
        )}

        {project.demo && (
          <Button asChild size="sm">
            <Link href={project.demo} target="_blank">
              <ExternalLink className="h-4 w-4 mr-2" />
              Demo
            </Link>
          </Button>
        )}

      </CardFooter>
    </Card>
  )
}