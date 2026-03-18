import AIHeader from "@/components/admin/ai-lab/AIHeader"
import AITable from "@/components/admin/ai-lab/AITable"
import { AIElement } from "@/types/ai-lab";

export default async function AILabPage() {

  const res = await fetch(`/api/ai-lab?all=true`, {
          cache: "no-store"
        });
      
        const result = await res.json();
        const elements : AIElement[] = result.data || [];

  return (

    <div className="space-y-8">

      <AIHeader />

      <AITable elements={elements} />

    </div>
  )
}