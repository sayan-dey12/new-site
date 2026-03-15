import { getBlog } from "@/lib/blog"
import BlogEditor from "@/components/blog/BlogEditor"
import { notFound } from "next/navigation"

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const blog = await getBlog(slug)

  if (!blog) return notFound()

  return (
    <div className="max-w-7xl mx-auto py-10">

      <h1 className="text-3xl font-bold mb-8">
        Edit Blog
      </h1>

    
      <BlogEditor initialData={blog} />

    </div>
  )
}