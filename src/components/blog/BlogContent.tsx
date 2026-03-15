import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import { BlogType } from "@/types/blog"

export default function BlogContent({ blog }: { blog: BlogType }) {

  return (
    <div className="prose dark:prose-invert max-w-none">

      {blog.cover && (
        <img
          src={blog.cover}
          alt={blog.title || "not found"}
          className="rounded-xl mb-8"
        />
      )}

      {blog.excerpt && (
        <p className="text-lg text-muted-foreground mb-8">
          {blog.excerpt}
        </p>
      )}

      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
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