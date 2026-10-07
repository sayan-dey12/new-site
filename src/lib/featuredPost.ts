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

