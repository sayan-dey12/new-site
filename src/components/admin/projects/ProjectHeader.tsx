import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ProjectHeader() {
  return (
    <div className="flex items-center justify-between">

      <h1 className="text-3xl font-bold">
        Projects
      </h1>

      <Link href="/admin/new-project">
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Add Project
        </Button>
      </Link>

    </div>
  )
}