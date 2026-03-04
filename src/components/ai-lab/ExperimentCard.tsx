"use client"

import Image from "next/image"
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

interface ExperimentCardProps {
  title: string
  description: string
  tech: string[]
  image: string
  github?: string
  demo?: string
}

export default function ExperimentCard({
  title,
  description,
  tech,
  image,
  github,
  demo,
}: ExperimentCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {title}
          <Badge variant="secondary">Experiment</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-3">
        {demo && (
          <Button size="sm" asChild>
            <a href={demo} target="_blank">
              Demo <ExternalLink size={16} />
            </a>
          </Button>
        )}

        {github && (
          <Button size="sm" variant="outline" asChild>
            <a href={github} target="_blank">
              GitHub <Github size={16} />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}