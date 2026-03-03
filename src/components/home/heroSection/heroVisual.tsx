import Image from "next/image";

export default function HeroVisual() {
  return (
    <div
      className="relative flex items-center justify-center"
    >
      {/* Accent Glow */}
      <div
        className="absolute w-72 h-72 bg-accent/20 blur-3xl rounded-full"
      />

      {/* Image Card */}
      <div
        className="relative rounded-2xl overflow-hidden bg-card border border-border shadow-xl"
      >
        <Image
          src="/sayan_dey.jpg"   // <-- put image in /public
          alt="Sayan Dey"
          width={420}
          height={520}
          priority
          className="object-cover w-70 md:w-95 h-auto"
        />
      </div>
    </div>
  );
}