import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import { BlogType } from "@/types/blog"
import Image from "next/image"

export default function BlogContent({ blog }: { blog: BlogType }) {
  console.log("RAW BLOG CONTENT:", JSON.stringify(blog.content))

  return (
    <div className="prose dark:prose-invert max-w-none prose-code:before:content-none prose-code:after:content-none">
      
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
      
      {/* cover image, excerpt, etc */}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, [rehypeHighlight, { detect: false }]]}
        components={{
          pre({ children }) {
            return (
              <pre className="rounded-lg p-4 m-2 mt-4 overflow-x-auto text-white bg-zinc-900">
                {children}
              </pre>
            )
          },
          code({ className, children, ...props }) {
          const isBlock = className?.includes("hljs") || className?.includes("language-")
          if (isBlock) {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
          return (
            <code
              className="font-mono text-[0.875em] bg-zinc-900 text-zinc-100 px-1.5 py-0.5 rounded"
              {...props}
            >
              {children}
            </code>
          )
          },
        }}
      >
        {blog.content}
      </ReactMarkdown>
    </div>
  )
}