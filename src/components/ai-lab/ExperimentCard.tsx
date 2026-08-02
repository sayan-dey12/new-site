import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Github, ExternalLink } from "lucide-react"
import { AIElement } from "@/types/ai-lab"

export default function ExperimentCard({
  aiElement,
}: {
  aiElement: AIElement
}) {
  return (
    <Card className="group bg-card border border-border shadow-sm backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* Image clickable */}

      <Link
        href={`/ai-lab/${aiElement.slug}`}
        className="relative h-44 w-full overflow-hidden block"
      >
        <Image
          src={aiElement.coverImage || "/images/fallback.png"}
          alt={aiElement.title}
          fill
          className="object-cover rounded-2xl px-1 transition-transform duration-300 group-hover:scale-105"
        />
      </Link>

      <CardHeader>

        <CardTitle className="flex items-center justify-between">

          {/* Title clickable */}

          <Link
            href={`/ai-lab/${aiElement.slug}`}
            className="hover:underline"
          >
            {aiElement.title}
          </Link>

          <Badge variant="secondary" className="bg-primary">
            {aiElement.category}
          </Badge>

        </CardTitle>

      </CardHeader>

      <CardContent className="space-y-4">

        <p className="text-sm text-muted-foreground">
          {aiElement.excerpt}
        </p>

        <div className="flex flex-wrap gap-2">
          {aiElement.tech.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>

      </CardContent>

      <CardFooter className="flex gap-3">

        {aiElement.demo && (
          <Button size="sm" asChild>
            <Link
              href={aiElement.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo <ExternalLink size={16} />
            </Link>
          </Button>
        )}

        {aiElement.github && (
          <Button size="sm" variant="outline" asChild>
            <Link
              href={aiElement.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Github size={16} />
            </Link>
          </Button>
        )}

      </CardFooter>

    </Card>
  )
}