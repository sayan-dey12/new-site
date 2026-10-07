import { connectDB } from "@/dbConfig/dbConfig";
import { AIElementModel } from "@/models/AiLab";
import { ProjectModel } from "@/models/Project";
import { BlogModel } from "@/models/Blog";

export async function getFeaturedAIElements() {
  await connectDB();

  const aiElements = await AIElementModel.find({
    featured: true,
    published: true,
  })
    .sort({ createdAt: -1 })
    .lean();

  return aiElements.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));
}

export async function getFeaturedProjects() {
  await connectDB();

  const projects = await ProjectModel.find({
    featured: true,
    published: true,
  })
    .sort({ createdAt: -1 })
    .lean();

  return projects.map((project) => ({
    ...project,
    _id: project._id.toString(),
  }));
}

export async function getLatestBlogs(limit = 3) {
  await connectDB();

  const blogs = await BlogModel.find({
    published: true,
  })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();

  return blogs.map((blog) => ({
    ...blog,
    _id: blog._id.toString(),
  }));
}