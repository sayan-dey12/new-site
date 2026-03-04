"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

type PaginationListProps<T> = {
  items: T[]
  itemsPerPage?: number
  renderItem: (item: T) => React.ReactNode
}

export default function PaginationList<T>({
  items,
  itemsPerPage = 6,
  renderItem,
}: PaginationListProps<T>) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get("page")) || 1

  const totalPages = Math.ceil(items.length / itemsPerPage)

  const start = (page - 1) * itemsPerPage
  const end = start + itemsPerPage

  const visibleItems = items.slice(start, end)

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams)
    params.set("page", String(newPage))

    router.push(`?${params.toString()}`)
  }

  return (
    <div className="space-y-10">

      {/* Animated grid */}

      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">

          {visibleItems.map((item, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderItem(item)}
            </motion.div>
          ))}

        </AnimatePresence>
      </motion.div>

      {/* Pagination controls */}

      {totalPages > 1 && (
        <div className="flex justify-center gap-3 flex-wrap">

          <Button
            variant="outline"
            disabled={page === 1}
            onClick={() => changePage(page - 1)}
          >
            Previous
          </Button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNumber = i + 1

            return (
              <Button
                key={pageNumber}
                variant={page === pageNumber ? "default" : "outline"}
                onClick={() => changePage(pageNumber)}
              >
                {pageNumber}
              </Button>
            )
          })}

          <Button
            variant="outline"
            disabled={page === totalPages}
            onClick={() => changePage(page + 1)}
          >
            Next
          </Button>

        </div>
      )}

    </div>
  )
}