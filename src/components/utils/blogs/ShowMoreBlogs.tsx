
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/utils/blogs/BlogCard";
import { loadMoreBlogs } from "@/app/blogs/actions";
import type { BlogListItem } from "@/types/blog";

type ShowMoreProps = {
  initialBlogs: BlogListItem[];
  totalBlogs: number;
};

const PAGE_SIZE = 6;

export default function ShowMoreBlogs({
  initialBlogs,
  totalBlogs,
}: ShowMoreProps) {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [hasMore, setHasMore] = useState(
    initialBlogs.length < totalBlogs
  );
  const [loading, setLoading] = useState(false);

  async function handleShowMore() {
    if (loading || !hasMore) return;

    setLoading(true);

    try {
      const nextBlogs = await loadMoreBlogs(blogs.length);

      setBlogs((current) => [...current, ...nextBlogs]);

      setHasMore(
        blogs.length + nextBlogs.length < totalBlogs
      );
    } catch (error) {
      console.error("Failed to load more blogs:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div
        className="
          grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8
        "
      >
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center">
          <Button
            className="bg-card shadow-md border border-border"
            onClick={handleShowMore}
            disabled={loading}
          >
            {loading ? "Loading..." : "Show More"}
          </Button>
        </div>
      )}
    </div>
  );
}
