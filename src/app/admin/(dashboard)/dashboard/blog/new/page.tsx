import BlogEditor from "@/components/blog/BlogEditor"

export default function NewBlogPage() {
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Write New Blog</h1>

      <BlogEditor />
    </div>
  )
}