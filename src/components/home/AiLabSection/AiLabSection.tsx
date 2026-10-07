import SectionHeader from "../SectionHeader";
import { AIElement } from "@/types/ai-lab";
import ViewAllButton from "@/components/utils/ViewAllButton";
// import FeaturedAICarousel from "./FeaturedAICarousel";
import { getFeaturedAIElements } from "@/lib/featuredPost"
import { CarouselItem } from "@/components/ui/carousel";
import FeaturedCarousel from "@/components/utils/carousel/FeaturedCarousel";
import FeaturedAIProjectCard from "@/components/utils/ai-lab/FeaturedAICardHome";

export default async function AiLabSection() {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/ai-lab`,
  //   { cache: "no-store" }
  // );

  // const result = await res.json();
  // const aiElements: AIElement[] = result.data || [];

  // const featured = aiElements.filter((e) => e.featured === true);

  const featured : AIElement[] = await getFeaturedAIElements();

  if (featured.length === 0) return null;

  return (
    <section className="pb-2">
      <div className="max-w-6xl mx-auto px-5">

        <SectionHeader
          title="AI Lab"
          subtitle="Experimental AI systems, intelligent agents and ongoing research explorations."
        />

        <FeaturedCarousel autoplayDelay={1500}>
          {featured.map((item) => (
            <CarouselItem
              key={item._id}
              className="basis-full"
            >
              <FeaturedAIProjectCard aiElement={item} />
            </CarouselItem>
          ))}
        </FeaturedCarousel>

      </div>

      <ViewAllButton href="/ai-lab" label="Explore AI Lab" />
      <br /><br />
    </section>
  );
}