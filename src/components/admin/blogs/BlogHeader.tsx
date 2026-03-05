import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function BlogHeader() {
  return (
    <div className="flex items-center justify-between">

      <h1 className="text-3xl font-bold">
        Blogs
      </h1>

      <Link href="/admin/new-blog">
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          New Blog
        </Button>
      </Link>

    </div>
  )
}