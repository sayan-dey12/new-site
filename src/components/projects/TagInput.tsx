import { useState } from "react"

type Props = {
  tags: string[]
  setTags: (v: string[]) => void
}

export default function TagInput({ tags, setTags }: Props) {
  const [input, setInput] = useState("")

  const addTag = () => {
    const trimmed = input
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")

    if (!trimmed) return
    if (tags.includes(trimmed)) return

    setTags([...tags, trimmed])
    setInput("")
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag))
  }

  return (
    <>
      <input
        type="text"
        placeholder="#tags"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") addTag()
        }}
      />

      <button onClick={addTag}>add</button>

      {tags.map(tag => (
        <span
          key={tag}
          onClick={() => removeTag(tag)}
        >
          {tag}
        </span>
      ))}
    </>
  )
}