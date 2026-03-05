"use client"

import Link from "next/link"
import { LayoutDashboard, FileText, FolderKanban, FlaskConical, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r bg-background p-6">

      <h2 className="text-xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="space-y-2">

        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted"
        >
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link
          href="/admin/blogs"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted"
        >
          <FileText size={18} />
          Blogs
        </Link>

        <Link
          href="/admin/projects"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted"
        >
          <FolderKanban size={18} />
          Projects
        </Link>

        <Link
          href="/admin/ai-lab"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted"
        >
          <FlaskConical size={18} />
          AI Lab
        </Link>

        <Link
          href="/admin/settings"
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted"
        >
          <Settings size={18} />
          Settings
        </Link>

      </nav>

    </aside>
  )
}