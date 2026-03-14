import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

type Project = {
  coverImage: string
  title: string
  description: string
}

export default function ProjectCard({ project }: {project: Project}) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">

      <div className="relative h-40">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          {project.description}
        </CardDescription>
      </CardHeader>

    </Card>
  );
}