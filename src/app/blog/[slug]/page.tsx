import { getBlog } from "@/lib/blog"
import { isAdmin } from "@/lib/auth"

import BlogContent from "@/components/blog/BlogContent"
import BlogMeta from "@/components/blog/BlogMeta"
import BlogTags from "@/components/blog/BlogTags"
import AuthorSidebar from "@/components/blog/AuthorSidebar"
import BlogAdminSection from "@/components/blog/BlogAdminSection"

import { notFound } from "next/navigation"

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const blog = await getBlog(slug)

  if (!blog) return notFound()

  const admin = await isAdmin()

  return (
    <div className="max-w-7xl mx-auto px-2 py-10 grid grid-cols-1 lg:grid-cols-5 gap-5">

      <div className="hidden lg:block"></div>

      <article className="lg:col-span-3">

        <h1 className="text-4xl font-bold mb-4 text-center">
          {blog.title}
        </h1>

        <BlogMeta blog={blog} />

        {/* ADMIN SECTION */}
        {admin && (
          <BlogAdminSection blog={blog} />
        )}

        <BlogContent blog={blog} />

        <BlogTags blog={blog} />

      </article>

      <aside className="lg:col-span-1 order-last lg:order-0">

        <div className="lg:sticky lg:top-24">
          <AuthorSidebar />
        </div>

      </aside>

    </div>
  )
}