import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Bot } from "lucide-react"

interface AgentCardProps {
  title: string
  description: string
  tech: string[]
}

export default function AgentCard({
  title,
  description,
  tech,
}: AgentCardProps) {
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <CardHeader className="flex flex-row items-center gap-3">

        <div className="p-2 rounded-md bg-secondary">
          <Bot size={20} />
        </div>

        <CardTitle>{title}</CardTitle>

      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>

    </Card>
  )
}