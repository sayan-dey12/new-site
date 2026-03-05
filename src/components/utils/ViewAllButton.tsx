import Link from "next/link"
import { ArrowRight } from "lucide-react"

type ViewAllButtonProps = {
  href: string
  label: string
}

export default function ViewAllButton({ href, label }: ViewAllButtonProps) {
  return (
    <div className="flex justify-center mt-10">
      <Link
        href={href}
        className="
        inline-flex items-center gap-2
        px-6 py-3
        rounded-xl
        bg-card
        shadow-md
        text-secondary-foreground
        text-sm font-medium
        transition-smooth
        duration-200
        hover:bg-card/80
        hover:gap-4
        hover:shadow-lg
        "
      >
        {label}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}