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
        bg-card
      ">

        {/* Image */}
        <div className="relative h-44">
          <Image
            src={blog.cover || "/images/fallback.png"}
            alt={blog.title}
            fill
            sizes="(max-width: 639px) calc(100vw - 3rem), (max-width: 1023px) calc((100vw - 4rem) / 2), (max-width: 1279px) calc((100vw - 4rem) / 3), 384px"
            className="object-cover px-1 rounded-2xl"
          />
        </div>

        <CardHeader>

          {/* Meta */}
          <p className="text-xs text-muted-foreground">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {year: "numeric",month: "short",day: "numeric",})} • {blog.readingTime || "5 min read"}
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