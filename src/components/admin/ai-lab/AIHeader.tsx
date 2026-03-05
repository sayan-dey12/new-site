import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AIHeader() {
  return (
    <div className="flex items-center justify-between">

      <h1 className="text-3xl font-bold">
        AI Lab
      </h1>

      <Link href="/admin/new-ai-element">
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          Add AI Element
        </Button>
      </Link>

    </div>
  )
}