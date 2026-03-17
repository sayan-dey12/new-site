interface Props {
  category: string;
  items: string[];
}

export default function StackGroup({ category, items }: Props) {
  return (
    <div className="space-y-4">

      <h3 className="font-semibold text-lg">
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((tech) => (
          <span
            key={tech}
            className="
              px-3 py-1
              text-sm
              rounded-full
              bg-muted
              text-muted-foreground
              border border-border
              transition-all duration-200
              hover:bg-accent hover:text-accent-foreground hover:scale-105
            "
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}