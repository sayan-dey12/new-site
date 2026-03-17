import QuickActionCard from "./QuickActionCard"
import { PenLine, FolderPlus, FlaskConical } from "lucide-react"
import SectionHeader from "@/components/utils/SectionHeader"

export default function QuickActionsSection() {
  return (
    <section className="space-y-3">
    <SectionHeader title="Quick Action" subtitle="" />
    <div className="grid gap-6 md:grid-cols-3">
      <QuickActionCard
        title="Write Blog"
        href="/admin/dashboard/blog/new"
        icon={PenLine}
      />

      <QuickActionCard
        title="Add Project"
        href="/admin/dashboard/project/new"
        icon={FolderPlus}
      />

      <QuickActionCard
        title="Add AI Experiment"
        href="/admin/dashboard/ai-lab/new"
        icon={FlaskConical}
      />

    </div>
    </section>
  )
}