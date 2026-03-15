import { BlogType } from "@/types/blog"
import Image from "next/image"

function formatDate(date: Date | string) {
  const d = new Date(date)

  const day = d.getDate()
  const suffix =
    day % 10 === 1 && day !== 11 ? "st" :
    day % 10 === 2 && day !== 12 ? "nd" :
    day % 10 === 3 && day !== 13 ? "rd" :
    "th"

  const month = d.toLocaleString("default", { month: "short" })
  const year = d.getFullYear()

  return `${day}${suffix} ${month}, ${year}`
}

export default function BlogMeta({ blog }: { blog: BlogType }) {

  return (
    <div className="flex items-center justify-center flex-wrap gap-3 text-md text-muted-foreground mb-8">

      {blog.authorName && (
        <>
          <Image
            src="/me-photo.jpg"
            alt={blog.authorName}
            width={32}
            height={32}
            className="rounded-full"
          />

          <span className="font-medium text-foreground">
            {blog.authorName}
          </span>
        </>
      )}

      {blog.readingTime && (
        <>
          <span>•</span>
          <span>{blog.readingTime}</span>
        </>
      )}

      {blog.createdAt && (
        <>
          <span>•</span>
          <span>{formatDate(blog.createdAt)}</span>
        </>
      )}

      {blog.catagory && (
        <>
          {/* <span>•</span> */}
          <span className="px-2 py-0.5 bg-card border border-border rounded text-md">
            {blog.catagory}
          </span>
        </>
      )}

    </div>
  )
}