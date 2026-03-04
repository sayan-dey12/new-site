import Link from "next/link"

interface Blog {
  title: string
  excerpt: string
  slug: string
  date: string
  readTime: string
  image: string
}

export default function FeaturedBlog({ post }: { post: Blog }) {
  return (
    <Link href={`/blog/${post.slug}`}>

      <article
        className="
          grid
          md:grid-cols-2
          bg-card
          border
          rounded-2xl
          overflow-hidden
          group
          hover:shadow-xl
          transition
        "
      >

        {/* Image */}
        <div className="h-64 md:h-auto overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="
              w-full
              h-full
              object-cover
              group-hover:scale-105
              transition
              duration-300
            "
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">

          <span className="text-sm text-accent font-medium">
            Featured Article
          </span>

          <h2 className="text-2xl font-bold mt-2">
            {post.title}
          </h2>

          <p className="text-muted-foreground mt-3">
            {post.excerpt}
          </p>

          <div className="text-sm text-muted-foreground mt-4">
            {post.date} • {post.readTime}
          </div>

          <span className="mt-4 text-accent font-medium">
            Read Article →
          </span>

        </div>

      </article>

    </Link>
  )
}