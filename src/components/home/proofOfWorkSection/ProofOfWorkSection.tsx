import BorderModern from "@/components/utils/BorderModern";
import SectionHeader from "../SectionHeader";
import ProofCard from "./ProofCard";
import { proofItems } from "./proofData";

export default function ProofOfWorkSection() {
  return (
    <section className="pb-5">

      <div className="max-w-7xl mx-auto px-5">

        <SectionHeader
          title="Proof of Work"
          subtitle="Demonstrating practical experience in building scalable , intelligent and production-grade systems."
        />

        {/* Grid */}
        <div
          className="grid gap-6  sm:grid-cols-2 lg:grid-cols-4"
        >
          {proofItems.map((item) => (
            <ProofCard key={item.title} {...item} />
          ))}
        </div>

      </div>
      <br /><br />
      {/* <BorderModern/> */}
    </section>
  );
}