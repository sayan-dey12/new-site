
import "server-only";

import { connectDB } from "@/dbConfig/dbConfig";
import { BlogModel } from "@/models/Blog";
import type { BlogListItem } from "@/types/blog";

const BLOG_CARD_FIELDS =
  "_id title slug excerpt cover createdAt readingTime featured published authorName";

function toBlogListItem(blog: {
  _id: unknown;
  title: string;
  slug: string;
  excerpt: string;
  cover?: string;
  createdAt: Date | string;
  readingTime?: string;
  featured: boolean;
  published: boolean;
  authorName?: string;
}): BlogListItem {
  return {
    _id: String(blog._id),
    title: blog.title,
    slug: blog.slug,
    excerpt: blog.excerpt,
    cover: blog.cover,
    createdAt:
      blog.createdAt instanceof Date
        ? blog.createdAt.toISOString()
        : String(blog.createdAt),
    readingTime: blog.readingTime,
    featured: blog.featured,
    published: blog.published,
    authorName: blog.authorName,
  };
}

export async function getPublishedBlogs({
  skip = 0,
  limit = 6,
}: {
  skip?: number;
  limit?: number;
} = {}): Promise<BlogListItem[]> {
  await connectDB();

  const blogs = await BlogModel.find({ published: true })
    .select(BLOG_CARD_FIELDS)
    .sort({ createdAt: -1, _id: -1 })
    .skip(Math.max(0, Math.floor(skip)))
    .limit(Math.min(12, Math.max(1, Math.floor(limit))))
    .lean();

  return blogs.map((blog) => toBlogListItem(blog));
}

export async function getFeaturedBlog(): Promise<BlogListItem | null> {
  await connectDB();

  const blog = await BlogModel.findOne({
    published: true,
    featured: true,
  })
    .select(BLOG_CARD_FIELDS)
    .sort({ createdAt: -1, _id: -1 })
    .lean();

  return blog ? toBlogListItem(blog) : null;
}

export async function getPublishedBlogCount(): Promise<number> {
  await connectDB();

  return BlogModel.countDocuments({ published: true });
}
