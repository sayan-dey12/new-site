import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css" // IMPORTANT
import { Project } from "@/types/project"

export default function ProjectContent({ project }: { project: Project }) {
  return (
    <div
      className="
        prose prose-lg
        dark:prose-invert
        max-w-none
        pt-6

        /* Headings */
        prose-h1:text-4xl prose-h1:font-bold prose-h1:mt-8
        prose-h2:text-3xl prose-h2:font-semibold prose-h2:mt-6
        prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-5
        prose-h4:text-xl prose-h4:font-medium prose-h4:mt-4
        prose-h5:text-lg prose-h5:font-medium prose-h5:mt-3

        /* HR */
        prose-hr:border-gray-400 prose-hr:my-8 prose-hr:opacity-100

        /* Tables */
        prose-table:border prose-table:border-gray-500
        prose-th:border prose-th:border-gray-500
        prose-td:border prose-td:border-gray-500
        prose-th:bg-zinc-800 prose-th:text-white
        prose-td:bg-zinc-900 prose-td:text-white
        prose-th:px-3 prose-th:py-2
        prose-td:px-3 prose-td:py-2
      "
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          pre({ children }) {
            return (
              <pre className="rounded-lg p-4 mt-4 overflow-x-auto">
                {children}
              </pre>
            )
          },

          img({ src = "", alt = "" }) {
            return (
              <img
                src={src}
                alt={alt}
                className="rounded-lg my-4 cursor-pointer"
              />
            )
          },

          a({ href = "", children }) {
            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {children}
              </a>
            )
          }
        }}
      >
        {project.description}
      </ReactMarkdown>
    </div>
  )
}