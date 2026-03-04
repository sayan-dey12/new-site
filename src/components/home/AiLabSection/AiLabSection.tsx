import SectionHeader from "../SectionHeader";
import AiLabCard from "./AiLabCard";
import { aiLabItems } from "./aiLabData";

export default function AiLabSection() {
  return (
    <section className="py-10 bg-primary">

      <div className="max-w-7xl mx-auto px-5">

        <SectionHeader
          title="AI Lab"
          subtitle="Experimental AI systems, intelligent agents and ongoing research explorations."
          />

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