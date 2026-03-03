import HeroCTA from "./heroCTA";

export default function HeroText() {
  return (
    <div className="space-y-6">

      <p className="text-accent font-bold">
        Hello, I'm
      </p>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
        Sayan Dey
        <br />
        <span className="text-muted-foreground">
          Building AI-powered systems
        </span>
      </h1>

      <p className="text-muted-foreground max-w-lg text-base md:text-lg">
        Full-stack developer focused on scalable
        systems, AI agents and real-time applications.
      </p>

      <HeroCTA />

    </div>
  );
}