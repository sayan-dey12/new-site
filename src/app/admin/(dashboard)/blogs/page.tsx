import BlogTable from "@/components/admin/blogs/BlogTable"
import BlogHeader from "@/components/admin/blogs/BlogHeader"
import { BlogType } from "@/types/blog";

export default async function BlogsPage() {

   const res = await fetch(`/api/blog?all=true`, {
      cache: "no-store"
    });
  
    const result = await res.json();
    const blogs: BlogType[] = result.data || [];
  return (
    <div className="space-y-8">

      <BlogHeader />

      <BlogTable blogs={blogs} />

    </div>
  )
}