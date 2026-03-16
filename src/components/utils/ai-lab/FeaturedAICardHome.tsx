import Image from "next/image"
import Link from "next/link"

import { AIElement } from "@/types/ai-lab"

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
  aiElement: AIElement
}

export default function FeaturedAIProjectCard({
  aiElement,
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
          href={`/ai-lab/${aiElement.slug}`}
          className="relative w-full aspect-video md:aspect-auto md:h-full block"
        >
          <Image
            src={aiElement.coverImage || "/fallback.png"}
            alt={aiElement.title}
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
                  {aiElement.category}
                </Badge>

                <Badge variant="outline">
                  {aiElement.status}
                </Badge>

              </div>

              {/* Title clickable */}

              <Link href={`/ai-lab/${aiElement.slug}`}>
                <CardTitle className="text-2xl hover:underline">
                  {aiElement.title}
                </CardTitle>
              </Link>

              <CardDescription className="mt-3 text-sm">
                {aiElement.description}
              </CardDescription>

            </CardHeader>

            {/* Highlight */}

            {aiElement.blog && (
              <Link href={aiElement.blog} className="text-sm text-muted-foreground mt-4">
                 <p>Blog Link</p>
              </Link>
            )}

            {/* Tags */}

            <CardContent className="p-0 mt-5 flex flex-wrap gap-2">

              {aiElement.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}

            </CardContent>

          </div>

          {/* External Links */}

          <CardFooter className="p-0 mt-6 flex gap-3">

            {aiElement.github && (
              <Button asChild variant="outline" size="sm">
                <Link
                  href={aiElement.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            )}

            {aiElement.demo && (
              <Button asChild size="sm">
                <Link
                  href={aiElement.demo}
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