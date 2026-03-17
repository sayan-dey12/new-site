import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="space-y-16">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 py-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Text */}
        <div className="space-y-4">
          <Skeleton className="h-10 w-[80%]" />
          <Skeleton className="h-6 w-[60%]" />
          <Skeleton className="h-6 w-[50%]" />

          <div className="flex gap-3 pt-4">
            <Skeleton className="h-10 w-32 rounded-xl" />
            <Skeleton className="h-10 w-32 rounded-xl" />
          </div>
        </div>

        {/* Visual */}
        <Skeleton className="h-64 w-full rounded-xl" />
      </section>


      {/* PROOF OF WORK */}
      <section className="max-w-7xl mx-auto px-5 space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-60" />
          <Skeleton className="h-4 w-[60%]" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-24 w-full rounded-xl" />
              <Skeleton className="h-5 w-[70%]" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          ))}
        </div>
      </section>


      {/* AI LAB */}
      <section className="max-w-7xl mx-auto px-5 space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-[60%]" />
        </div>

        <div className="space-y-6">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="border rounded-xl p-5 space-y-4">
              <Skeleton className="h-6 w-[60%]" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[80%]" />
            </div>
          ))}
        </div>
      </section>


      {/* FEATURED PROJECTS */}
      <section className="max-w-7xl mx-auto px-5 space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-56" />
          <Skeleton className="h-4 w-[60%]" />
        </div>

        <div className="space-y-10">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-6 items-center">
              <Skeleton className="h-56 w-full rounded-xl" />

              <div className="space-y-4">
                <Skeleton className="h-6 w-[70%]" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* BLOG */}
      <section className="max-w-7xl mx-auto px-5 space-y-8">
        <div className="space-y-2">
          <Skeleton className="h-8 w-40" />
          <Skeleton className="h-4 w-[60%]" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-40 w-full rounded-xl" />
              <Skeleton className="h-5 w-[80%]" />
              <Skeleton className="h-4 w-[60%]" />
            </div>
          ))}
        </div>
      </section>


      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-5 space-y-6">
        <Skeleton className="h-8 w-48 mx-auto" />

        <div className="flex flex-wrap justify-center gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 text-center space-y-4">
        <Skeleton className="h-8 w-64 mx-auto" />
        <Skeleton className="h-4 w-[50%] mx-auto" />

        <div className="flex justify-center gap-4 pt-4">
          <Skeleton className="h-10 w-32 rounded-xl" />
          <Skeleton className="h-10 w-32 rounded-xl" />
        </div>
      </section>

    </main>
  )
}