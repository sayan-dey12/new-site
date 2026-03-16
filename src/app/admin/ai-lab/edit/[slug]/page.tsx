import AiLabEditor from "@/components/ai-lab/AiLabEditor"
import { notFound } from "next/navigation"
import { getAI } from "@/lib/ai-lab"

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const aiElement = await getAI(slug)

  if (!aiElement) return notFound()

  return (
    <div className="max-w-7xl mx-auto py-10">

      <h1 className="text-3xl font-bold mb-8">
        Edit AI Project
      </h1>

    
      <AiLabEditor initialData={aiElement} />

    </div>
  )
}