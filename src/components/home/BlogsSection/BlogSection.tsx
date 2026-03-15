import BlogCard from "../../utils/blogs/BlogCard";
//import { blogs } from "../../utils/blogs/blogData";
import { BlogType } from "@/types/blog";
import SectionHeader from "../SectionHeader";
//import BorderModern from "@/components/utils/BorderModern";
import ViewAllButton from "@/components/utils/ViewAllButton";

export default async function BlogSection() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog?limit=3`, {
    cache: "no-store"
  });

  const result = await res.json();
  const blogs: BlogType[] = result?.data ?? [];
  return (
    <section className="pb-5">

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
          {blogs.map((blog : BlogType) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        {/* View All */}
        <ViewAllButton href="/blogs" label="Read All Blogs"/>

      </div>
      <br /><br />
      {/* <BorderModern/> */}

    </section>
  );
}