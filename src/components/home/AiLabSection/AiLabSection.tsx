//import BorderModern from "@/components/utils/BorderModern";
import SectionHeader from "../SectionHeader";
import { AIElement } from "@/types/ai-lab";
import ViewAllButton from "@/components/utils/ViewAllButton";
import FeaturedAIProjectCard from "@/components/utils/ai-lab/FeaturedAICardHome";

export default async function AiLabSection() {

   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai-lab`, {
      cache: "no-store"
    });
  
    const result = await res.json();
    const aiElements : AIElement[] = result.data || [];

    const featured = aiElements.filter((e)=> e.featured === true)

    if (featured.length === 0) return null

  return (
    <section className="pb-5">

      <div className="max-w-7xl mx-auto px-5">

        <SectionHeader
          title="AI Lab"
          subtitle="Experimental AI systems, intelligent agents and ongoing research explorations."
          />

        {/* Grid */}
        <div className="space-y-6">
          {featured.map((exp) => (
                <FeaturedAIProjectCard key={exp._id} aiElement={exp}/>
            ))}
        </div>

      </div>
      <ViewAllButton href="/ai-lab" label="Explore AI Lab"/>
      <br /><br />
      {/* <BorderModern/> */}

    </section>
  );
}