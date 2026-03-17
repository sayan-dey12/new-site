"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import ProofCard from "./ProofCard";
import { proofItems } from "./proofData";

export default function ProofCarousel() {
  return (
    <Carousel
      opts={{ loop: false }}
      plugins={[
        Autoplay({
          delay: 2000,
          stopOnInteraction: false,
        }),
      ]}
      className="relative w-full"
    >
      {/* CONTENT */}
      <CarouselContent>
        {proofItems.map((item) => (
          <CarouselItem
            key={item.title}
            className="basis-full px-8" // ✅ space for arrows
          >
            <ProofCard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* 🔥 ARROWS (INSIDE BUT POSITIONED WELL) */}
      <CarouselPrevious className="left-1 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border border-border" />

      <CarouselNext className="right-1 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur border border-border" />
    </Carousel>
  );
}