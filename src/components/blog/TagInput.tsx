"use client"

import { useState } from "react"

type Props = {
  tags: string[]
  setTags: (tags: string[]) => void
}

export default function TagInput({ tags, setTags }: Props) {
  const [input, setInput] = useState("")

  const addTag = () => {
    if (!input) return
    setTags([...tags, input])
    setInput("")
  }

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag))
  }

  return (
    <div>

      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add tag"
          className="border p-2 rounded-xl bg-card"
        />

        <button onClick={addTag} className="px-3 py-2 bg-purple-600 text-white rounded">
          Add
        </button>
      </div>

      <div className="flex gap-2 mt-2 flex-wrap">
        {tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-200 rounded cursor-pointer"
            onClick={() => removeTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  )
}