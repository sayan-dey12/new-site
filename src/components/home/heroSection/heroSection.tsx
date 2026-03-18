import HeroText from "./heroText";
import HeroVisual from "./heroVisual";
import HeroCTA from "./heroCTA";

export default function HeroSection() {
  return (
    <section className="relative text-primary-foreground pt-5 pb-5">

      <div
        className="
          max-w-6xl mx-auto px-5 py-3
          grid md:grid-cols-3
          gap-6 md:gap-14
          items-center
        "
      >
        <div className="space-y-6 md:col-span-2">
          <HeroText />

          <div className="hidden md:block">
            <HeroCTA />
          </div>
        </div>

        <div className="md:col-span-1 flex justify-center md:justify-end">
          <HeroVisual />
        </div>

        {/* 👉 CTA for mobile */}
        <div className="md:hidden flex justify-center mt-4">
          <HeroCTA />
        </div>
      </div>

    </section>
  );
}