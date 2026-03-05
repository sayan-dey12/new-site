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
        href="/admin/new-blog"
        icon={PenLine}
      />

      <QuickActionCard
        title="Add Project"
        href="/admin/new-project"
        icon={FolderPlus}
      />

      <QuickActionCard
        title="Add AI Experiment"
        href="/admin/new-experiment"
        icon={FlaskConical}
      />

    </div>
    </section>
  )
}