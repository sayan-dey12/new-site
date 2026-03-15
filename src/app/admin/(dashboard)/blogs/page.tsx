import BlogTable from "@/components/admin/blogs/BlogTable"
import BlogHeader from "@/components/admin/blogs/BlogHeader"
import { BlogType } from "@/types/blog"

export default async function BlogsPage() {

  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog?`, {
    cache: "no-store"
  });

  const result = await res.json();
  const blogs: BlogType[] = result.data || [];

  const blogList = blogs.slice(0, 10) // simulate pagination

  return (
    <div className="space-y-8">

      <BlogHeader />

      <BlogTable blogs={blogList} />

    </div>
  )
}