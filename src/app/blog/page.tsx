import BlogCard from "@/components/utils/blogs/BlogCard";
import { blogs } from "@/components/utils/blogs/blogData";

export default function BlogsPage() {
  return (
    <main className="bg-primary min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Hero Section */}
        <section className="text-center mb-16">

          <h1 className="text-4xl md:text-5xl font-bold">
            Blog
          </h1>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Thoughts on AI, backend engineering, DevOps, and building
            modern software systems.
          </p>

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

        {/* Blog Grid */}
        <section>

          <div
            className="
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {blogs.map((blog) => (
              <BlogCard key={blog._id} {...blog} />
            ))}
          </div>

        </section>

      </div>

    </main>
  );
}