import { AIElement } from "@/types/ai-lab"
import Image from "next/image"


export default function AIProjectCoverExpert({ aiElement }: { aiElement: AIElement }){
    return(
        <>
        {aiElement.coverImage && (
              <div className="relative w-full h-100 mb-8">
                <Image
                  src={aiElement.coverImage}
                  alt={aiElement.title || "AI Project cover"}
                  fill
                  className="rounded-xl object-cover"
                  priority
                />
              </div>
            )}
        
              {aiElement.excerpt && (
                <p className="text-lg text-muted-foreground mb-8">
                  {aiElement.excerpt}
                </p>
              )}
        </>
    )
}