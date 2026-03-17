"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
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
          delay: 2000,
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
    </Carousel>
  );
}