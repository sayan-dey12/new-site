import AIHeader from "@/components/admin/ai-lab/AIHeader"
import AITable from "@/components/admin/ai-lab/AITable"

import { aiElements } from "@/data/ai-lab"

export default function AILabPage() {

  const elements = aiElements.slice(0, 10)

  return (
    <div className="space-y-8">

      <AIHeader />

      <AITable elements={elements} />

    </div>
  )
}