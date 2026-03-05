import BlogTable from "@/components/admin/blogs/BlogTable"
import BlogHeader from "@/components/admin/blogs/BlogHeader"
import { blogs } from "@/data/blogData"

export default function BlogsPage() {

  const blogList = blogs.slice(0, 10) // simulate pagination

  return (
    <div className="space-y-8">

      <BlogHeader />

      <BlogTable blogs={blogList} />

    </div>
  )
}