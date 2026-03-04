import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BlogType } from "@/types/blog";

export default function BlogCard({blog}:{blog:BlogType}) {
  return (
    <Link href={`/blog/${blog.slug}`}>

      <Card className="
        overflow-hidden
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        cursor-pointer
        bg-secondary
      ">

        {/* Image */}
        <div className="relative h-44">
          <Image
            src={blog.coverImage || "/images/fallback.png"}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>

        <CardHeader>

          {/* Meta */}
          <p className="text-xs text-muted-foreground">
            {new Date(blog.createdAt).toLocaleDateString()} • {blog.readingTime || "5 min read"}
          </p>

          <CardTitle>{blog.title}</CardTitle>

          <CardDescription>
            {blog.excerpt}
          </CardDescription>

        </CardHeader>

      </Card>

    </Link>
  );
}   