import HeroText from "./heroText";
import HeroVisual from "./heroVisual";

export default function HeroSection() {
  return (
    <section className="relative bg-background text-foreground">

      <div className="
        max-w-7xl
        mx-auto
        px-5
        py-3 md:py-3
        grid md:grid-cols-2
        gap-14
        items-center
      ">
        <HeroText />
        <HeroVisual />
      </div>

    </section>
  );
}