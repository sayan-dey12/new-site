import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-14">

      {/* HERO (matches your gradient card layout) */}
      <section className="rounded-xl p-8 sm:p-12 space-y-6 bg-card">
        <div className="flex flex-col items-center space-y-4">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-4 w-[60%]" />

          {/* Badges */}
          <div className="flex gap-3 flex-wrap justify-center pt-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-20 rounded-full" />
            ))}
          </div>
        </div>
      </section>

      {/* Buttons */}
      <div className="flex justify-center gap-4">
        <Skeleton className="h-10 w-44 rounded-xl" />
        <Skeleton className="h-10 w-36 rounded-xl" />
      </div>

      {/* Divider */}
      <div className="h-px bg-border w-full" />

      {/* ABOUT */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <Skeleton className="h-8 w-48 mx-auto" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[90%] mx-auto" />
        <Skeleton className="h-4 w-[80%] mx-auto" />
      </section>

      {/* EXPERIMENTS */}
      <section className="space-y-10">
        <Skeleton className="h-8 w-64 mx-auto" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border rounded-xl overflow-hidden space-y-4 p-4">

              {/* Image */}
              <Skeleton className="h-44 w-full rounded-xl" />

              {/* Title + Badge */}
              <div className="flex justify-between items-center">
                <Skeleton className="h-5 w-[60%]" />
                <Skeleton className="h-5 w-16 rounded-full" />
              </div>

              {/* Description */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />

              {/* Tech badges */}
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 3 }).map((_, j) => (
                  <Skeleton key={j} className="h-5 w-16 rounded-full" />
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* AGENTS */}
      <section className="space-y-10">
        <Skeleton className="h-8 w-40 mx-auto" />

        <div className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border rounded-xl p-5 space-y-4">

              {/* Header */}
              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-md" />
                <Skeleton className="h-5 w-[60%]" />
              </div>

              {/* Description */}
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[85%]" />

              {/* Tech */}
              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 3 }).map((_, j) => (
                  <Skeleton key={j} className="h-5 w-14 rounded-full" />
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border w-full" />

      {/* ARCHITECTURE */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <Skeleton className="h-8 w-64 mx-auto" />
          <Skeleton className="h-4 w-[60%] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border rounded-xl p-6 space-y-4">

              <div className="flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-md" />
                <Skeleton className="h-5 w-[60%]" />
              </div>

              <Skeleton className="h-4 w-full" />

              <div className="flex gap-2 flex-wrap">
                {Array.from({ length: 3 }).map((_, j) => (
                  <Skeleton key={j} className="h-5 w-16 rounded-full" />
                ))}
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-border w-full" />

      {/* UPCOMING */}
      <section className="space-y-10">
        <div className="text-center space-y-3">
          <Skeleton className="h-8 w-52 mx-auto" />
          <Skeleton className="h-4 w-[60%] mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="border rounded-xl p-5 space-y-4">

              <div className="flex justify-between items-center">
                <Skeleton className="h-5 w-[60%]" />
                <Skeleton className="h-5 w-12 rounded-full" />
              </div>

              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />

            </div>
          ))}
        </div>
      </section>

    </main>
  )
}