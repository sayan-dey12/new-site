"use client"

import MDEditor from "@uiw/react-md-editor"

export default function MarkdownEditor({ value, onChange }: any) {

  const uploadImage = async (file: File) => {

    const formData = new FormData()
    formData.append("file", file)

    const res = await fetch("/api/upload-image", {
      method: "POST",
      body: formData
    })

    const data = await res.json()

    const markdownImage = `![image](${data.secure_url})`

    onChange(value + "\n" + markdownImage)
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
        value={value}
        onChange={(v) => onChange(v || "")}
        height={500}
      />

    </div>
  )
}