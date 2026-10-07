import BlogCard from "../../utils/blogs/BlogCard";
import { BlogType } from "@/types/blog";
import SectionHeader from "../SectionHeader";
import ViewAllButton from "@/components/utils/ViewAllButton";
// import BlogCarousel from "./BlogCarousal";
import { getLatestBlogs } from "@/lib/featuredPost";
import { CarouselItem } from "@/components/ui/carousel";
import FeaturedCarousel from "@/components/utils/carousel/FeaturedCarousel";

export default async function BlogSection() {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog?limit=3`,
  //   { cache: "no-store" }
  // );

  // const result = await res.json();
  // const blogs: BlogType[] = result?.data ?? [];

  const blogs: BlogType[] = await getLatestBlogs(3);
  return (
    <section className="pb-2">
      <div className="max-w-6xl mx-auto px-5">
        
        <SectionHeader
          title="Latest Blogs"
          subtitle="Fresh posts about full-stack development, AI/ML experiments, and what I’m learning."
        />

        {/* 📱 Mobile Carousel */}
        <div className="lg:hidden">
          <FeaturedCarousel autoplayDelay={1700}>
            {blogs.map((blog) => (
              <CarouselItem
                key={blog._id}
                className="basis-full"
              >
                <BlogCard blog={blog} />
              </CarouselItem>
            ))}
          </FeaturedCarousel>
        </div>

        {/* 💻 Desktop Grid */}
        <div className="hidden lg:grid gap-6 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        <ViewAllButton href="/blogs" label="Read All Blogs" />
      </div>

      <br /><br />
    </section>
  );
}