import BorderModern from "@/components/utils/BorderModern";
import HeroText from "./heroText";
import HeroVisual from "./heroVisual";

export default function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground pt-8 pb-5">

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
      <br /><br />
      <BorderModern/>

    </section>
  );
}