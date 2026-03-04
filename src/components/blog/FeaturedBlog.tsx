import Link from "next/link";
import type { BlogType } from "@/types/blog";

export default function FeaturedBlog({ blog }: { blog: BlogType }) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group block w-full">
      <article
        className="
          max-w-3xl mx-auto
          rounded-2xl overflow-hidden
          relative
          shadow-lg hover:shadow-xl
          transition-transform duration-300
          hover:-translate-y-1
        "
      >
        <div className="relative w-full aspect-video">
          <img
            src={blog.coverImage || "/images/fallback.png"}
            alt={blog.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight line-clamp-2">
            {blog.title}
          </h2>

          <div className="mt-2 text-sm text-muted-foreground">
            {blog.authorName || "Admin"} • {blog.readingTime || "5 min read"} •{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </div>

          <p className="mt-2 text-foreground text-sm line-clamp-2">
            {blog.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
