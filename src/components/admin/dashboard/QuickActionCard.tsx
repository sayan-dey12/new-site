import { Card, CardContent } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"
import Link from "next/link"

interface QuickActionCardProps {
  title: string
  href: string
  icon: LucideIcon
}

export default function QuickActionCard({
  title,
  href,
  icon: Icon,
}: QuickActionCardProps) {
  return (
    <Link href={href}>
      <Card className="cursor-pointer hover:-translate-y-1 hover:shadow-lg transition">
        <CardContent className="flex items-center gap-4 p-6">

          <Icon className="w-6 h-6" />

          <span className="font-medium">
            {title}
          </span>

        </CardContent>
      </Card>
    </Link>
  )
}