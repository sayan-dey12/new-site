import Image from "next/image"
import { AIElement } from "@/types/ai-lab"

export default function AIProjectMediaSection({ aiElement }: { aiElement: AIElement }) {

  if (!aiElement.images?.length) return null

  return (
    <div className="mt-12 space-y-6">

      <h2 className="text-2xl font-semibold">
        Media
      </h2>

      {/* Images */}
      {aiElement.images?.length && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {aiElement.images.map((img) => (
            <div key={img} className="relative w-full h-64">

              <Image
                src={img}
                alt={aiElement.title}
                fill
                className="object-cover rounded-lg"
              />

            </div>
          ))}

        </div>
      )}

    </div>
  )
}