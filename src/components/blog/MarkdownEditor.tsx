"use client"

import MDEditor from "@uiw/react-md-editor"

type Props = {
  value: string
  onChange: (v: string) => void
}

export default function MarkdownEditor({ value, onChange }: Props) {
  return (
    <div data-color-mode="dark">
      <MDEditor
        value={value}
        onChange={(v) => onChange(v || "")}
        height={500}
      />
    </div>
  )
}