import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function FeaturedProjectCard({
  project,
}: any) {
  return (
    <Card className="overflow-hidden">

      <div className="grid md:grid-cols-2">

        {/* Image */}
        <div className="relative h-64 md:h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <CardContent className="p-8 flex flex-col justify-center">

          <p className="text-accent text-sm mb-2">
            Featured Project
          </p>

          <h3 className="text-2xl font-semibold">
            {project.title}
          </h3>

          <p className="text-muted-foreground mt-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t: string) => (
              <span
                key={t}
                className="text-xs bg-muted px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <Button asChild>
              <a href={project.demo}>Live Demo</a>
            </Button>

            <Button variant="outline" asChild>
              <a href={project.github}>
                GitHub
              </a>
            </Button>
          </div>

        </CardContent>
      </div>
    </Card>
  );
}