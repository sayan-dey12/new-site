"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
   CarouselPrevious,
  CarouselNext
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import BlogCard from "../../utils/blogs/BlogCard";
import { BlogType } from "@/types/blog";

export default function BlogCarousel({ blogs }: { blogs: BlogType[] }) {
  return (
    <Carousel
      opts={{ loop: false }}
      plugins={[
        Autoplay({
          delay: 1500,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        {blogs.map((blog) => (
          <CarouselItem key={blog._id} className="basis-full">
            <BlogCard blog={blog} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-1 bg-white dark:bg-black border border-border" />
      <CarouselNext className="right-1 bg-white dark:bg-black border border-border" />
    </Carousel>
  );
}