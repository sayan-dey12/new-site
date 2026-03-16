import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Bot } from "lucide-react"
import { AIElement } from "@/types/ai-lab"

export default function AgentCard({
  aiElement,
}: {
  aiElement: AIElement
}) {
  return (
    <Link href={`/ai-lab/${aiElement.slug}`} className="block">

      <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer">

        <CardHeader className="flex flex-row items-center gap-3">

          <div className="p-2 rounded-md bg-secondary">
            <Bot size={20} />
          </div>

          <CardTitle className="hover:underline">
            {aiElement.title}
          </CardTitle>

        </CardHeader>

        <CardContent className="space-y-4">

          <p className="text-sm text-muted-foreground">
            {aiElement.excerpt}
          </p>

          <div className="flex flex-wrap gap-2">

            {aiElement.tech.map((t) => (
              <Badge key={t} variant="outline">
                {t}
              </Badge>
            ))}

          </div>

        </CardContent>

      </Card>

    </Link>
  )
}