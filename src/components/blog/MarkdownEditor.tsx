"use client"

import { Dispatch, SetStateAction } from "react"
import { toast } from "react-hot-toast"

type Props = {
  content : string,
  setContent: Dispatch<SetStateAction<string>>
}

import MDEditor from "@uiw/react-md-editor"

export default function MarkdownEditor({ content, setContent }: Props) {

  const uploadImage = async (file: File) => {

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData
    })

  if (!res.ok) {
    toast.error("Image upload failed")
    return
  }

    const data = await res.json()

    const markdownImage = `![image](${data.url})`

    setContent(prev => prev + "\n" + markdownImage)
  }

  return (
    <div>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files) return
          uploadImage(e.target.files[0])
        }}
      />
      <br />
      <br />

      <MDEditor
        value={content}
        onChange={(v) => setContent(v || "")}
        height={500}
      />

    </div>
  )
}