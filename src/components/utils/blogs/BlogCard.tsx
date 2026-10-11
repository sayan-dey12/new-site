import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { BlogListItem } from "@/types/blog";

export default function BlogCard({
  blog,
}: {
  blog: BlogListItem;
}) {
  return (
    <Link
      href={`/blog/${blog.slug}`}
      className="block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <Card
        className="
          h-full overflow-hidden
          bg-card
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-lg
        "
      >
        {/* Image */}
        <div className="relative aspect-3/2 w-full overflow-hidden bg-muted">
          <Image
            src={blog.cover || "/images/fallback.png"}
            alt={blog.title}
            fill
            sizes="
              (max-width: 639px) calc(100vw - 3rem),
              (max-width: 1023px) calc((100vw - 4rem) / 2),
              (max-width: 1279px) calc((100vw - 4rem) / 3),
              440px
            "
            className="object-contain"
          />
        </div>

        <CardHeader className="gap-3">
          {/* Metadata */}
          <p className="text-xs text-muted-foreground">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}{" "}
            • {blog.readingTime || "5 min read"}
          </p>

          <CardTitle className="line-clamp-2">
            {blog.title}
          </CardTitle>

          <CardDescription className="line-clamp-4">
            {blog.excerpt}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
