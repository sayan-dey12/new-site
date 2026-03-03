import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative isolate flex items-center justify-center">

      {/* Accent Glow */}
      <div
        className="
          absolute
          -z-10
          w-80 h-80
          md:w-105 md:h-105
          bg-accent/30
          blur-3xl
          rounded-full
        "
      />

      {/* Image Card */}
      <div
        className="
          relative
          rounded-3xl
          overflow-hidden
          bg-card
          border border-border
          shadow-xl
        "
      >
        <Image
          src="/sayan_dey.jpg"
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