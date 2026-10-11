
"use server";

import { getPublishedBlogs } from "@/lib/blogs";

export async function loadMoreBlogs(skip: number) {
  if (!Number.isSafeInteger(skip) || skip < 0) {
    throw new Error("Invalid blog pagination offset");
  }

  return getPublishedBlogs({
    skip,
    limit: 6,
  });
}
