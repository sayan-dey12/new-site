import { BlogType } from "@/types/blog"

export default function BlogTags({ blog }: { blog: BlogType }) {

  if (!blog.tags?.length && !blog.views) return null

  return (
    <div className="flex items-center justify-between mt-12">

      {/* TAGS */}

      <div className="flex flex-wrap gap-2">

        {blog.tags?.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 border border-border bg-card rounded-full text-md"
          >
            #{tag}
          </span>
        ))}

      </div>

      {/* VIEWS */}

      {blog.views !== undefined && (
        <span className="text-sm text-muted-foreground">
          {blog.views} views
        </span>
      )}

    </div>
  )
}