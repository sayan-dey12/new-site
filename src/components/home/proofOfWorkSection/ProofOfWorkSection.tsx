import SectionHeader from "../SectionHeader";
import ProofCard from "./ProofCard";
import { proofItems } from "./proofData";
import ProofCarousel from "./ProofCarousel";

export default function ProofOfWorkSection() {
  return (
    <section className="pb-2">
      <div className="max-w-6xl mx-auto px-5">

        <SectionHeader
          title="Proof of Work"
          subtitle="Demonstrating practical experience in building scalable, intelligent and production-grade systems."
        />

        {/* 📱 MOBILE → CAROUSEL */}
        <div className="sm:hidden">
          <ProofCarousel />
        </div>

        {/* 💻 DESKTOP → GRID */}
        <div className="hidden sm:grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {proofItems.map((item) => (
            <ProofCard key={item.title} {...item} />
          ))}
        </div>

      </div>

      <br /><br />
    </section>
  );
}