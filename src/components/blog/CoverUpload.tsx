"use client"

import { useState } from "react"

export default function CoverUpload({ setCover }: any) {

  const uploadImage = async (file: File) => {

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData
    })

    const data = await res.json()

    setCover(data.secure_url)
  }

  return (
    <input
      type="file"
      accept="image/*"
      className="bg-card rounded-2xl"
      onChange={(e) => {
        if (!e.target.files) return
        uploadImage(e.target.files[0])
      }}
    />
  )
}