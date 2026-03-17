import FeaturedSection from "@/components/blog/FeaturedSection";
import HeroBlogs from "@/components/blog/HeroSection";
import BlogCard from "@/components/utils/blogs/BlogCard";
import ShowMore from "@/components/utils/ShowMore";
import { BlogType } from "@/types/blog";
//import { BlogType } from "@/types/blog";
import { Metadata } from "next"

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Blogs | Sayan Builds",

  description:
    "Read blogs on full-stack development, system design, AI, and backend engineering by Sayan.",

  keywords: [
    "developer blogs",
    "full stack blogs",
    "system design blogs",
    "AI blogs",
    "backend engineering",
    "Next.js blogs",
  ],

  authors: [{ name: "Sayan Dey" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Blogs | Sayan Builds",
    description:
      "Read blogs on full-stack development, system design, AI, and backend engineering.",
    url: `${baseUrl}/blog`,
    siteName: "Sayan Builds",
    images: [
      {
        url: `${baseUrl}/default.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blogs | Sayan Builds",
    description:
      "Read blogs on full-stack development, system design, AI, and backend engineering.",
    images: [`${baseUrl}/default.jpg`],
  },

  alternates: {
    canonical: `${baseUrl}/blog`,
  },
}

export default async function BlogsPage() {
  
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
    cache: "no-store"
  });

  const result = await res.json();
  const blogs: BlogType[] = result.data || [];
  
  const featuredBlog = blogs.find( (blog)=> blog.featured===true)
  // console.log("featured blog: ",featuredBlog);


  return (
    
    <main className="min-h-screen">

      <div className="max-w-6xl mx-auto px-6 py-6">

        {/* Hero Section */}
        <section className="text-center mb-16">

          <HeroBlogs/>

          {/* Search */}
          <div className="mt-8">
            <input
              type="text"
              placeholder="Search articles..."
              className="
                w-full
                max-w-md
                px-4
                py-3
                rounded-xl
                bg-card
                border
                border-border shadow-sm backdrop-blur-sm
                outline-none
                focus:ring-2
                focus:ring-accent
              "
            />
          </div>

        </section>

        {/* Featured Articles */}        
          <section>
            <FeaturedSection blog={featuredBlog ? { ...featuredBlog, authorName: "Sayan Dey" } : undefined} />
          </section>
        

        {/* Blog Grid */}
        <section>
          

            <ShowMore initialCount={6}>

              {blogs.map((blog: BlogType) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}

            </ShowMore>

        </section>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",

            name: "Blogs - Sayan Builds",
            description:
              "A collection of blogs on full-stack development, AI, and system design.",

            url: `${baseUrl}/blog`,

            inLanguage: "en",

            author: {
              "@type": "Person",
              name: "Sayan Dey",
            },

            publisher: {
              "@type": "Organization",
              name: "Sayan Builds",
            },
          }),
        }}
      />

    </main>
  );
}