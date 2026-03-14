"use client"

import Image from "next/image"

type Props = {
  images: string[]
  setImages: (v: string[]) => void
}

export default function ProjectImagesUpload({ images, setImages }: Props) {

  const uploadImage = async (file: File) => {

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData
    })

    const data = await res.json()

    setImages([...images, data.url])
  }

  const removeImage = (url: string) => {
    setImages(images.filter(img => img !== url))
  }

  return (
    <div className="space-y-4 m-4">

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files) return
          uploadImage(e.target.files[0])
        }}
      />

      <div className="flex gap-3 flex-wrap">
        {images.map((img) => (
          <div key={img} className="relative">
            <Image src={img} className="w-32 rounded" alt=""/>

            <button
              onClick={() => removeImage(img)}
              className="absolute top-0 right-0 bg-red-500 text-white text-xs px-1"
            >
              ✕
            </button>

          </div>
        ))}
      </div>

    </div>
  )
}