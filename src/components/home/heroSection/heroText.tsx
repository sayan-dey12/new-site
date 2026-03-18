import HeroCTA from "./heroCTA";

export default function HeroText() {
  return (
    <div className="space-y-6">

      <p className="text-accent font-semibold text-sm tracking-wide">
        Full-Stack Developer , AI learner
      </p>

      <h1 className="text-2xl md:text-5xl font-bold leading-tight tracking-tight">
        Sayan Dey
        <br />
        <span className="text-muted-foreground">
          Building scalable systems & AI applications
        </span>
      </h1>

      <p className="text-muted-foreground max-w-lg text-base md:text-lg">
        I build real-world applications using MERN, Next.js, and modern AI tools —
        focusing on backend systems, agent-based workflows, and real-time features.
      </p>

    </div>
  );
}