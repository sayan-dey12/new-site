import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function GridBackgroundDemo({children}:Props) {
  return (
    <div className="relative bg-white dark:bg-black">
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-0",
          "opacity-100",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#d4d4d8_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none fixed inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
