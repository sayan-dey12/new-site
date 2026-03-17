import SectionHeader from "@/components/utils/SectionHeader";
import StatsCard from "./StatsCard";
import { FileText, FolderKanban, FlaskConical, Star } from "lucide-react";
import { BlogModel } from "@/models/Blog";
import { ProjectModel } from "@/models/Project";
import { AIElementModel } from "@/models/AiLab";
import { connectDB } from "@/dbConfig/dbConfig";

export default async function StatsSection() {
  let blogs = 0;
  let projects = 0;
  let aiExperiments = 0;
  let featured = 0;

  try {
    await connectDB();

    const [
      blogsCount,
      projectsCount,
      aiCount,
      featuredBlogs,
      featuredProjects,
      featuredAI,
    ] = await Promise.all([
      BlogModel.countDocuments(),
      ProjectModel.countDocuments(),
      AIElementModel.countDocuments(),
      BlogModel.countDocuments({ featured: true }),
      ProjectModel.countDocuments({ featured: true }),
      AIElementModel.countDocuments({ featured: true }),
    ]);

    blogs = blogsCount;
    projects = projectsCount;
    aiExperiments = aiCount;
    featured = featuredBlogs + featuredProjects + featuredAI;

  } catch (error) {
    console.error("Stats fetch error:", error);
  }

  return (
    <section className="space-y-3">
      <SectionHeader title="Stats" subtitle="" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard title="Blogs" value={blogs} icon={FileText} />

        <StatsCard title="Projects" value={projects} icon={FolderKanban} />

        <StatsCard title="AI Experiments" value={aiExperiments} icon={FlaskConical} />

        <StatsCard title="Featured" value={featured} icon={Star} />
      </div>
    </section>
  );
}