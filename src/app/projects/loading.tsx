import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-6 space-y-16">

        {/* Hero Section */}
        <section className="rounded-xl p-8 sm:p-12 bg-background space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <Skeleton className="h-10 w-[60%]" />
            <Skeleton className="h-4 w-[40%]" />
            <Skeleton className="h-4 w-[40%]" />
          </div>

          <div className="flex justify-center">
            <Skeleton className="h-12 w-full max-w-md rounded-xl" />
          </div>
        </section>


        {/* Featured Projects */}
        <section className="space-y-10">

          {/* Section Header */}
          <div className="space-y-3">
            <Skeleton className="h-8 w-60" />
            <Skeleton className="h-4 w-[70%]" />
            <Skeleton className="h-4 w-[55%]" />
          </div>

          {/* Featured Project Cards */}
          <div className="space-y-10">
            {Array.from({ length: 2 }).map((_, i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 gap-6 items-center"
              >
                <Skeleton className="h-64 w-full rounded-xl" />

                <div className="space-y-4">
                  <Skeleton className="h-6 w-[70%]" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* All Projects */}
        <section className="space-y-10">

          {/* Section Header */}
          <div className="space-y-3">
            <Skeleton className="h-8 w-52" />
            <Skeleton className="h-4 w-[70%]" />
            <Skeleton className="h-4 w-[55%]" />
          </div>

          {/* Project Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-44 w-full rounded-lg" />
                <Skeleton className="h-5 w-[80%]" />
                <Skeleton className="h-4 w-[60%]" />
              </div>
            ))}
          </div>

        </section>

      </div>
    </main>
  )
}