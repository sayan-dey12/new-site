import Image from "next/image";

export default function HeroVisual() {
  return (
    <div className="relative isolate flex items-center justify-center">

      {/* Accent Glow */}
      {/* <div
        className="
          absolute
          -z-10
          w-80 h-80
          md:w-[420px] md:h-[420px]
          bg-accent/30
          blur-3xl
          rounded-full
        "
      /> */}

      {/* Image Card */}
      <div
        className="
          relative
          rounded-3xl
          overflow-hidden
        "
      >
        {/* 🖼️ Image */}
        <Image
          src="/hero_image_3.png"
          alt="Sayan Dey"
          width={420}
          height={520}
          priority
          className="object-cover w-70 md:w-95 h-auto"
        />

        {/* 🌫️ Bottom Fade (FIXED POSITION) */}
          <div
            className="
              pointer-events-none
              absolute inset-x-0 bottom-0
              h-28 md:h-40
              bg-linear-to-b
              from-transparent
              via-[#fff7ea]/20
              to-[#fff7ea]
              dark:via-[#0b0a0a]/40 dark:to-[#0b0a0a]
            "
          />
      </div>

    </div>
  );
}