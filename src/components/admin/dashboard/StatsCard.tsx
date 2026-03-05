import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  title: string
  value: number
  icon: LucideIcon
}

export default function StatsCard({ title, value, icon: Icon }: StatsCardProps) {
  return (
    <Card className="hover:shadow-md transition">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm text-muted-foreground">
          {title}
        </CardTitle>

        <Icon className="w-5 h-5 text-muted-foreground" />
      </CardHeader>

      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}