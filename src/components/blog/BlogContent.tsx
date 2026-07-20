import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import { BlogType } from "@/types/blog"
import Image from "next/image"

export default function BlogContent({ blog }: { blog: BlogType }) {

  return (
    <div className="prose dark:prose-invert max-w-none">

      {blog.cover && (
      <div className="relative w-full h-100 mb-8">
        <Image
          src={blog.cover}
          alt={blog.title || "Blog cover"}
          fill
          className="rounded-xl object-cover"
          priority
        />
      </div>
    )}

      {blog.excerpt && (
        <p className="text-lg text-muted-foreground mb-8">
          {blog.excerpt}
        </p>
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw,rehypeHighlight]}
        components={{
          pre({ children }) {
            return (
              <pre className="rounded-lg p-4 m-2 mt-4 overflow-x-auto text-white bg-zinc-900">
                {children}
              </pre>
            )
          }
        }}
      >
        {blog.content}
      </ReactMarkdown>

    </div>
  )
}