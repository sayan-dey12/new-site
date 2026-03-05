import { AIElement } from "@/types/ai-lab"
import AIRow from "./AIRow"

interface Props {
  elements: AIElement[]
}

export default function AITable({ elements }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden">

      <table className="w-full text-sm">

        <thead className="bg-muted border-b">
          <tr className="text-left">

            <th className="p-4">AI Element</th>
            <th>Category</th>
            <th>Status</th>
            <th>Tech</th>
            <th>Date</th>
            <th className="text-right pr-6">Actions</th>

          </tr>
        </thead>

        <tbody>

          {elements.map((element) => (
            <AIRow
              key={element.id}
              element={element}
            />
          ))}

        </tbody>

      </table>

    </div>
  )
}