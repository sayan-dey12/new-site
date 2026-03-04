"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type ShowMoreProps = {
  initialCount?: number
  children: React.ReactNode[]
}

export default function ShowMore({
  initialCount = 3,
  children,
}: ShowMoreProps) {
  const [expanded, setExpanded] = useState(false)

  const visibleItems = expanded
    ? children
    : children.slice(0, initialCount)

  return (
    <div className="space-y-8">

      <div className="
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-3
              mt-8
            ">
        {visibleItems}
      </div>

      {children.length > initialCount && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}

    </div>
  )
}