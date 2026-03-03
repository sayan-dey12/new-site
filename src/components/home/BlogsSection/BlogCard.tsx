import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface BlogProps {
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
}

export default function BlogCard({
  title,
  description,
  date,
  readTime,
  image,
  slug,
}: BlogProps) {
  return (
    <Link href={`/blogs/${slug}`}>

      <Card className="
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        cursor-pointer
      ">

        {/* Image */}
        <div className="relative h-44">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <CardHeader>

          {/* Meta */}
          <p className="text-xs text-muted-foreground">
            {date} • {readTime}
          </p>

          <CardTitle>{title}</CardTitle>

          <CardDescription>
            {description}
          </CardDescription>

        </CardHeader>

      </Card>

    </Link>
  );
}   