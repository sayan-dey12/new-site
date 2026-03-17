"use client";

import { useEffect, useState } from "react";
import { AIElement } from "@/types/ai-lab";
import FeaturedAIProjectCard from "@/components/utils/ai-lab/FeaturedAICardHome";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedAICarousel({
  items,
}: {
  items: AIElement[];
}) {
  const [index, setIndex] = useState(0);

  // 🔁 Desktop autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === items.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [items.length]);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev === items.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      {/* 📱 MOBILE */}
      <div className="lg:hidden relative">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: false,
            }),
          ]}
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem key={item._id} className="basis-full">
                <FeaturedAIProjectCard aiElement={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-1 bg-white dark:bg-black border border-border" />
          <CarouselNext className="right-1 bg-white dark:bg-black border border-border" />
        </Carousel>
      </div>

      {/* 💻 DESKTOP */}
      <div className="hidden lg:flex justify-center">
        <div className="relative w-full max-w-7xl h-80 flex items-center">

          {/* LEFT */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-white dark:bg-black border border-border hover:bg-muted transition"
          >
            <ChevronLeft size={22} />
          </button>

          {/* RIGHT */}
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-1 rounded-full bg-white dark:bg-black border border-border hover:bg-muted transition"
          >
            <ChevronRight size={22} />
          </button>

          {/* SLIDES */}
          {items.map((item, i) => {
            const isActive = i === index;

            return (
              <div
                key={item._id}
                className={`
                  absolute inset-0 flex items-center justify-center
                  transition-all duration-700 ease-in-out
                  ${
                    isActive
                      ? "opacity-100 translate-y-0 scale-100 z-10"
                      : "opacity-0 translate-y-6 scale-95 z-0"
                  }
                `}
              >
                <div className="w-full">
                  <FeaturedAIProjectCard aiElement={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}