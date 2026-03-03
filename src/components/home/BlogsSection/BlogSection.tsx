import BlogCard from "./BlogCard";
import { blogs } from "./blogData";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function BlogSection() {
  return (
    <section className="py-10 bg-primary">

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest Blogs
          </h2>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Thoughts, learnings and deep dives into
            software engineering, AI and system design.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        ">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} {...blog} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/blogs">
              View All Blogs →
            </Link>
          </Button>
        </div>

      </div>

    </section>
  );
}