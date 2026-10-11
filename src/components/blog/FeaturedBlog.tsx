import Link from "next/link";
import type { BlogListItem } from "@/types/blog";
import Image from "next/image";

export default function FeaturedBlog({ blog }: { blog: BlogListItem }) {
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
          <Image
            src={blog.cover || "/images/fallback.png"}
            alt={blog.title || ""}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/45 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight line-clamp-2">
            {blog.title}
          </h2>

          <div className="mt-2 text-sm text-white/80">
            {blog.authorName || "Admin"} • {blog.readingTime || "5 min read"} •{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </div>

          <p className="mt-2 text-white/90 text-sm line-clamp-2">
            {blog.excerpt}
          </p>
        </div>
      </article>
    </Link>
  );
}
