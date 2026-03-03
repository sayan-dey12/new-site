import ProofCard from "./ProofCard";
import { proofItems } from "./proofData";

export default function ProofOfWorkSection() {
  return (
    <section className="bg-background py-10">

      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Proof of Work
          </h2>

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Demonstrating practical experience in building scalable,
            intelligent and production-grade systems.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-6  sm:grid-cols-2 lg:grid-cols-4"
        >
          {proofItems.map((item) => (
            <ProofCard key={item.title} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}