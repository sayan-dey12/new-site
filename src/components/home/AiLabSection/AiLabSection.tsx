import AiLabCard from "./AiLabCard";
import { aiLabItems } from "./aiLabData";

export default function AiLabSection() {
  return (
    <section className="py-10 bg-primary">

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            AI Lab
          </h2>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Experimental AI systems, intelligent agents
            and ongoing research explorations.
          </p>
        </div>

        {/* Grid */}
        <div className="
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-4
        ">
          {aiLabItems.map((item) => (
            <AiLabCard key={item.title} {...item} />
          ))}
        </div>

      </div>

    </section>
  );
}