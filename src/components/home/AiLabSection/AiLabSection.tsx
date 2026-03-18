import SectionHeader from "../SectionHeader";
import { AIElement } from "@/types/ai-lab";
import ViewAllButton from "@/components/utils/ViewAllButton";
import FeaturedAICarousel from "./FeaturedAICarousel";

export default async function AiLabSection() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/ai-lab`,
    { cache: "no-store" }
  );

  const result = await res.json();
  const aiElements: AIElement[] = result.data || [];

  const featured = aiElements.filter((e) => e.featured === true);

  if (featured.length === 0) return null;

  return (
    <section className="pb-2">
      <div className="max-w-6xl mx-auto px-5">

        <SectionHeader
          title="AI Lab"
          subtitle="Experimental AI systems, intelligent agents and ongoing research explorations."
        />

        {/* 🔥 Carousel instead of grid */}
        <FeaturedAICarousel items={featured} />

      </div>

      <ViewAllButton href="/ai-lab" label="Explore AI Lab" />
      <br /><br />
    </section>
  );
}