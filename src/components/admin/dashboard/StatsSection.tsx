import SectionHeader from "@/components/utils/SectionHeader"
import StatsCard from "./StatsCard"
import { FileText, FolderKanban, FlaskConical, Star } from "lucide-react"

export default function StatsSection() {
  return (

    <section className="space-y-3">
        <SectionHeader title="Stats" subtitle=""/>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

        <StatsCard
            title="Blogs"
            value={12}
            icon={FileText}
        />

        <StatsCard
            title="Projects"
            value={8}
            icon={FolderKanban}
        />

        <StatsCard
            title="AI Experiments"
            value={6}
            icon={FlaskConical}
        />

        <StatsCard
            title="Featured"
            value={4}
            icon={Star}
        />

        </div>
    </section>
  )
}