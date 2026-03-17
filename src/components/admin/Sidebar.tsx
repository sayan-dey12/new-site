"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  FlaskConical,
  LogOut,
} from "lucide-react";
import toast from "react-hot-toast";

export default function Sidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/admin/logout", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Logout failed");
        return;
      }

      toast.success("Logged out successfully");

      // redirect to login page
      router.push("/");
      router.refresh(); // important for auth state update
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <aside className="sticky top-0 h-screen w-64 border-r bg-background p-6">
      <h2 className="text-xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="space-y-2">
        <Link href="/admin/dashboard" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
          <LayoutDashboard size={18} />
          Dashboard
        </Link>

        <Link href="/admin/blogs" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
          <FileText size={18} />
          Blogs
        </Link>

        <Link href="/admin/projects" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
          <FolderKanban size={18} />
          Projects
        </Link>

        <Link href="/admin/ai-lab" className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted">
          <FlaskConical size={18} />
          AI Lab
        </Link>

        {/* 🔥 Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-red-500/10 text-red-500"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}