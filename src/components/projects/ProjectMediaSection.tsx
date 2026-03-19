"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Project } from "@/types/project"
import { ChevronRight , ChevronLeft , X } from "lucide-react"

export default function ProjectMediaSection({ project }: { project: Project }) {
  const images = project.images || []
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  if (!images.length && !project.video) return null

  const openModal = (index: number) => setCurrentIndex(index)
  const closeModal = () => setCurrentIndex(null)

  const nextImage = () => {
    if (currentIndex === null) return
    setCurrentIndex((prev) => (prev! + 1) % images.length)
  }

  const prevImage = () => {
    if (currentIndex === null) return
    setCurrentIndex((prev) => (prev! - 1 + images.length) % images.length)
  }

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (currentIndex === null) return
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }

    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [currentIndex])

  return (
    <div className="mt-12 space-y-6">

      <h2 className="text-2xl font-semibold">
        Media
      </h2>

      {/* Images Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {images.map((img, index) => (
            <div
              key={img}
              onClick={() => openModal(index)}
              className="
                group cursor-pointer
                relative w-full 
                h-52 sm:h-64 lg:h-64 xl:h-72
                rounded-xl 
                overflow-hidden
              "
            >
              <Image
                src={img}
                alt={project.title}
                fill
                className="
                  object-contain 
                  md:object-cover 
                  transition duration-500 ease-in-out
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-300" />
            </div>
          ))}

        </div>
      )}

      {/* Modal Viewer */}
      {currentIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center">

          {/* Image */}
          <div className="relative w-[90vw] h-[80vh]">
            <Image
              src={images[currentIndex]}
              alt="preview"
              fill
              className="object-contain"
            />
          </div>

           {/* Close */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            <X className="w-5 h-5"/>
          </button>

          {/* Left Arrow */}
          <button
            onClick={prevImage}
            className="
              absolute left-3 sm:left-5
              top-1/2 -translate-y-1/2

              bg-card/50 hover:bg-card/70
              text-card-foreground

              w-10 h-10 sm:w-12 sm:h-12
              rounded-full

              flex items-center justify-center
              text-2xl sm:text-3xl
            "
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextImage}
            className="
              absolute right-3 sm:right-5
              top-1/2 -translate-y-1/2

              bg-card/50 hover:bg-card/70
              text-card-foreground

              w-10 h-10 sm:w-12 sm:h-12
              rounded-full

              flex items-center justify-center
              text-2xl sm:text-3xl
            "
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

        </div>
      )}

      {/* Video */}
      {project.video && (
        <div className="aspect-video rounded-xl overflow-hidden shadow-md">

          <iframe
            src={project.video}
            className="w-full h-full"
            allowFullScreen
          />

        </div>
      )}

    </div>
  )
}