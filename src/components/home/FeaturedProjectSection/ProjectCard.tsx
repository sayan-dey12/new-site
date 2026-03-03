import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ProjectCard({ project }: any) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">

      <div className="relative h-40">
        <Image
          src={project.image}
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