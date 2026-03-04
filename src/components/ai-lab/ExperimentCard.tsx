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
import { AIElement } from "@/types/ai-lab"

export default function ExperimentCard({aiElement}: {aiElement:AIElement}) {
  return (
    <Card className="group bg-card overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">

      {/* image */}
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={aiElement.image || "/images/fallback.png"}
          alt={aiElement.title}
          fill
          className="object-cover rounded-2xl px-1 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {aiElement.title}
          <Badge variant="secondary" className="bg-primary">{aiElement.category}</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {aiElement.description}
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
            <a href={aiElement.demo} target="_blank" rel="noopener noreferrer">
              Demo <ExternalLink size={16} />
            </a>
          </Button>
        )}

        {aiElement.github && (
          <Button size="sm" variant="outline" asChild>
            <a href={aiElement.github} target="_blank" rel="noopener noreferrer">
              GitHub <Github size={16} />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}