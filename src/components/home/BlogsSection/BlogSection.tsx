import BlogCard from "../../utils/blogs/BlogCard";
import { blogs } from "../../utils/blogs/blogData";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SectionHeader from "../SectionHeader";
import BorderModern from "@/components/utils/BorderModern";
import ViewAllButton from "@/components/utils/ViewAllButton";

export default function BlogSection() {
  return (
    <section className="pb-5 bg-primary">

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
          {blogs.slice(0,3).map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        {/* View All */}
        <ViewAllButton href="/blogs" label="Read All Blogs"/>

      </div>
      <br /><br />
      <BorderModern/>

    </section>
  );
}