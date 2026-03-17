import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-12">

        {/* Hero Section Skeleton */}
        <section className="rounded-xl p-8 sm:p-12 bg-card space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-10 w-[70%]" />
            <Skeleton className="h-4 w-[60%]" />
            <Skeleton className="h-4 w-[40%]" />
          </div>

          <div className="flex justify-center">
            <Skeleton className="h-12 w-full max-w-md rounded-xl" />
          </div>
        </section>


        {/* Featured Section Skeleton */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Featured Blog */}
            <div className="lg:col-span-2 space-y-4">
              <Skeleton className="h-64 w-full rounded-xl" />
              <Skeleton className="h-6 w-[80%]" />
              <Skeleton className="h-4 w-[60%]" />
              <Skeleton className="h-4 w-[40%]" />
            </div>

            {/* Author Sidebar */}
            <div className="space-y-4">
              <Skeleton className="h-40 w-full rounded-xl" />
              <Skeleton className="h-4 w-[80%]" />
              <Skeleton className="h-4 w-[60%]" />
            </div>

          </div>
        </section>


        {/* Blog Grid Skeleton */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-44 w-full rounded-xl" />
              <Skeleton className="h-4 w-[40%]" />
              <Skeleton className="h-6 w-[90%]" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          ))}
        </section>

      </div>
    </main>
  )
}