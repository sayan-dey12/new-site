import { getBlog } from "@/lib/blog"
import { isAdmin } from "@/lib/auth"

import BlogContent from "@/components/blog/BlogContent"
import BlogMeta from "@/components/blog/BlogMeta"
import BlogTags from "@/components/blog/BlogTags"
import AuthorSidebar from "@/components/blog/AuthorSidebar"
import BlogAdminSection from "@/components/blog/BlogAdminSection"

import { notFound } from "next/navigation"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }>}): Promise<Metadata> {

  const { slug } = await params

  const blog = await getBlog(slug)

  if (!blog) {
    return {
      title: "Blog Not Found",
    }
  }

  const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  const url = `${baseUrl}/blog/${blog.slug}`

  return {

    metadataBase: new URL(baseUrl),

    title: `${blog.title} | Sayan Builds`,
    
    description: blog.excerpt,

    keywords: blog.tags?.join(", "),

    authors: [{ name: blog.authorName }],

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      url,
      siteName: "Sayan Builds",
      images: [
        {
          url: blog.cover || "/default.jpg",
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
      publishedTime: new Date(blog.createdAt).toISOString()    
    },

    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
      images: [blog.cover || "/default.jpg"],
    },

    alternates: {
      canonical: url,
    },

  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const blog = await getBlog(slug)

  if (!blog) return notFound()

  const admin = await isAdmin()

  const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  const url = `${baseUrl}/blog/${blog.slug}`

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

        {/* STRUCTURED DATA */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: blog.title,
            description: blog.excerpt,
            image: blog.cover,
            author: {
              "@type": "Person",
              name: blog.authorName,
            },
            publisher: {
              "@type": "Organization",
              name: "Sayan Builds",
            },
            mainEntityOfPage: url,
            datePublished: new Date(blog.createdAt).toISOString(),
          }),
        }}
      />

      </article>

      <aside className="lg:col-span-1 order-last lg:order-0">

        <div className="lg:sticky lg:top-24">
          <AuthorSidebar />
        </div>

      </aside>

    </div>
  )
}