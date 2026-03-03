import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  description: string;
  icon: LucideIcon;
  status: string;
}

export default function AiLabCard({
  title,
  description,
  icon: Icon,
  status,
}: Props) {
  return (
    <Card
      className="
        group
        relative
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        overflow-hidden
      "
    >
      {/* Glow Layer */}
      <div
        className="
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition
          bg-accent/10
        "
      />

      <CardHeader className="relative">

        {/* Status */}
        <span className="
          text-xs
          w-fit
          px-3 py-1
          rounded-full
          bg-muted
          text-muted-foreground
        ">
          {status}
        </span>

        {/* Icon */}
        <Icon className="w-7 h-7 text-accent mt-3" />

        <CardTitle>{title}</CardTitle>

        <CardDescription>
          {description}
        </CardDescription>

      </CardHeader>

      <CardContent />
    </Card>
  );
}