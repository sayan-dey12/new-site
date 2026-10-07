"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type FeaturedCarouselProps = {
  children: React.ReactNode;
  autoplayDelay?: number;
};

export default function FeaturedCarousel({
  children,
  autoplayDelay = 3000,
}: FeaturedCarouselProps) {
  return (
    <div className="relative w-full">
      <Carousel
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: autoplayDelay,
            stopOnInteraction: true,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>{children}</CarouselContent>

        <CarouselPrevious className="left-2 bg-white dark:bg-black border border-border" />

        <CarouselNext className="right-2 bg-white dark:bg-black border border-border" />
      </Carousel>
    </div>
  );
}