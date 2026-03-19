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

type FeaturedProjectCardProps = {
  project: Project
}

export default function FeaturedProjectCard({
  project,
}: FeaturedProjectCardProps) {
  return (
    <Card
      className="
      overflow-hidden
      transition
      duration-300
      hover:shadow-xl
      bg-card
      px-3
    "
    >
      <div className="grid md:grid-cols-2">

        {/* Image clickable */}

        <Link
          href={`/project/${project.slug}`}
          className="relative w-full aspect-video md:aspect-auto md:h-full block"
        >
          <Image
            src={project.coverImage || "/fallback.png"}
            alt={project.title}
            fill
            className="object-cover rounded-2xl"
          />
        </Link>

        {/* Content */}

        <div className="flex flex-col justify-between p-6">

          <div>

            <CardHeader className="p-0">

              {/* Category + Status */}

              <div className="flex gap-2 mb-3 flex-wrap">

                <Badge variant="secondary">
                  {project.category}
                </Badge>

                <Badge variant="outline">
                  {project.status}
                </Badge>

              </div>

              {/* Title clickable */}

              <Link href={`/project/${project.slug}`}>
                <CardTitle className="text-2xl hover:underline">
                  {project.title}
                </CardTitle>
              </Link>

              <CardDescription className="mt-3 text-sm">
                {project.excerpt}
              </CardDescription>

            </CardHeader>

            {/* Highlight */}

            {project.highlight && (
              <p className="text-sm text-muted-foreground mt-4">
                ⭐ {project.highlight}
              </p>
            )}

            {/* Tags */}

            <CardContent className="p-0 mt-5 flex flex-wrap gap-2">

              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}

            </CardContent>

          </div>

          {/* External Links */}

          <CardFooter className="p-0 mt-6 flex gap-3">

            {project.github && (
              <Button asChild variant="outline" size="sm">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
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
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}

          </CardFooter>

        </div>

      </div>
    </Card>
  )
}