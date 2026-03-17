import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-2 py-10 grid grid-cols-1 lg:grid-cols-5 gap-5">

      {/* LEFT EMPTY COLUMN */}
      <div className="hidden lg:block" />

      {/* MAIN CONTENT */}
      <article className="lg:col-span-3 space-y-6">

        {/* Title */}
        <div className="flex justify-center">
          <Skeleton className="h-10 w-[70%]" />
        </div>

        {/* Meta */}
        <div className="flex justify-center gap-3 flex-wrap">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-20 rounded" />
          <Skeleton className="h-6 w-20 rounded" />
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>

        {/* Admin Section (simulate buttons) */}
        <div className="flex justify-center gap-3 pt-4 flex-wrap">
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-24" />
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
        </div>

        {/* Cover Image */}
        <Skeleton className="h-100 w-full rounded-xl" />

        {/* Excerpt */}
        <Skeleton className="h-5 w-[90%]" />
        <Skeleton className="h-5 w-[80%]" />

        {/* Links */}
        <div className="flex gap-4 flex-wrap pt-4">
          <Skeleton className="h-10 w-32 rounded-lg" />
          <Skeleton className="h-10 w-32 rounded-lg" />
          <Skeleton className="h-10 w-40 rounded-lg" />
        </div>

        {/* Media Section */}
        <div className="space-y-4 pt-6">
          <Skeleton className="h-6 w-32" />

          <div className="grid md:grid-cols-2 gap-4">
            <Skeleton className="h-64 w-full rounded-lg" />
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>

          <Skeleton className="h-64 w-full rounded-lg" />
        </div>

        {/* Content (markdown blocks) */}
        <div className="space-y-3 pt-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
        </div>

      </article>

      {/* SIDEBAR */}
      <aside className="lg:col-span-1 order-last lg:order-0">
        <div className="lg:sticky lg:top-24 space-y-4">

          {/* Avatar */}
          <Skeleton className="h-24 w-24 rounded-2xl" />

          {/* Bio */}
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[80%]" />

          {/* Social icons */}
          <div className="flex gap-3 pt-2">
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-md" />
          </div>

        </div>
      </aside>

    </div>
  )
}