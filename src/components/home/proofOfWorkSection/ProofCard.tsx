import { LucideIcon } from "lucide-react";

interface ProofCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ProofCard({ title, description, icon: Icon }: ProofCardProps) {
  return (
    <div
      className="group relative rounded-2xl bg-card border border-border p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4"
      >
        <Icon className="w-6 h-6 text-accent" />
      </div>

      {/* Title */}
      <h3 className="font-semibold text-lg">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mt-2 text-sm">
        {description}
      </p>

      {/* Hover Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-accent/5 -z-10"
      />
    </div>
  );
}