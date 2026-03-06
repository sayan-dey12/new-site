import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function HexBackground({ children }: Props) {
  return (
    <div className="relative min-h-screen bg-white dark:bg-black">

      {/* HEXAGON GRID */}
      <div
        className="
        pointer-events-none
        fixed inset-0
        z-0
        opacity-50
        [background-size:60px_104px]
        [background-image:
        radial-gradient(circle at 30px 52px,#d4d4d8 2px,transparent 2px),
        radial-gradient(circle at 0px 0px,#d4d4d8 2px,transparent 2px)]
        dark:[background-image:
        radial-gradient(circle at 30px 52px,#3f3f46 2px,transparent 2px),
        radial-gradient(circle at 0px 0px,#3f3f46 2px,transparent 2px)]
      "
      />

      {/* ANIMATED GLOW */}
      <div
        className="
        pointer-events-none
        fixed
        -top-40
        -right-40
        h-[600px]
        w-[600px]
        rounded-full
        bg-purple-500/30
        blur-[140px]
        animate-pulse
        z-0
      "
      />

      {/* SECOND GLOW */}
      <div
        className="
        pointer-events-none
        fixed
        bottom-[-200px]
        left-[-200px]
        h-[500px]
        w-[500px]
        rounded-full
        bg-blue-500/20
        blur-[140px]
        animate-pulse
        z-0
      "
      />

      {/* RADIAL FADE */}
      <div
        className="
        pointer-events-none
        fixed
        inset-0
        z-0
        [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]
        bg-white/80
        dark:bg-black/80
      "
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}