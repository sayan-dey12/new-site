import BlogCard from "./BlogCard";
import { blogs } from "./blogData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeader from "../SectionHeader";

export default function BlogSection() {
  return (
    <section className="py-10 bg-primary">

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <SectionHeader
          title="Latest Blogs" 
          subtitle="Fresh posts about full-stack development, AI/ML experiments, and what I’m learning."
          />

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