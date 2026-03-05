import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PenLine, FolderPlus, FlaskConical } from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-8">

      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">

        <Card>
          <CardHeader>
            <CardTitle>Blogs</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            12
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            8
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Experiments</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            6
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Featured</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold">
            4
          </CardContent>
        </Card>

      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-6">

        <Link href="/admin/new-blog">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex items-center gap-4 p-6">
              <PenLine />
              <span className="font-medium">Write Blog</span>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/new-project">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex items-center gap-4 p-6">
              <FolderPlus />
              <span className="font-medium">Add Project</span>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/new-experiment">
          <Card className="cursor-pointer hover:shadow-lg transition">
            <CardContent className="flex items-center gap-4 p-6">
              <FlaskConical />
              <span className="font-medium">Add AI Experiment</span>
            </CardContent>
          </Card>
        </Link>

      </div>

    </div>
  )
}