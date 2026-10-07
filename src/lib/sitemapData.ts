import "server-only";

import { connectDB } from "@/dbConfig/dbConfig";
import { BlogModel } from "@/models/Blog";
import { ProjectModel } from "@/models/Project";
import { AIElementModel } from "@/models/AiLab";

export async function getSitemapData() {
  await connectDB();

  const [blogs, projects, aiElements] = await Promise.all([
    BlogModel.find({
      published: true,
    })
      .select("slug updatedAt")
      .lean(),

    ProjectModel.find({
      published: true,
    })
      .select("slug updatedAt")
      .lean(),

    AIElementModel.find({
      published: true,
    })
      .select("slug updatedAt")
      .lean(),
  ]);

  return {
    blogs: blogs.map((blog) => ({
      slug: blog.slug,
      updatedAt: blog.updatedAt,
    })),

    projects: projects.map((project) => ({
      slug: project.slug,
      updatedAt: project.updatedAt,
    })),

    aiElements: aiElements.map((item) => ({
      slug: item.slug,
      updatedAt: item.updatedAt,
    })),
  };
}