import FeaturedSection from "@/components/blog/FeaturedSection";
import HeroBlogs from "@/components/blog/HeroSection";
import BlogCard from "@/components/utils/blogs/BlogCard";
import { blogs } from "@/components/utils/blogs/blogData";
import ShowMore from "@/components/utils/ShowMore";
import { BlogType } from "@/types/blog";

export default function BlogsPage() {
  
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
                outline-none
                focus:ring-2
                focus:ring-accent
              "
            />
          </div>

        </section>

        {/* Featured Articles */}
        <section>
          <FeaturedSection blog={{...blogs[0]}} />
        </section>

        {/* Blog Grid */}
        <section>
          

            <ShowMore initialCount={6}>

              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}

            </ShowMore>

        </section>

      </div>

    </main>
  );
}