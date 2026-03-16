import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeHighlight from "rehype-highlight"
import { AIElement } from "@/types/ai-lab"

export default function AIProjectContent({ aiElement }: { aiElement: AIElement }) {

  return (
    <div className="prose dark:prose-invert max-w-none pt-6">

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
        {aiElement.description}
      </ReactMarkdown>

    </div>
  )
}