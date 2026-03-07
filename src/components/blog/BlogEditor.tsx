"use client"

import { useState } from "react"
import MarkdownEditor from "./MarkdownEditor"
import BlogMetadataForm from "./BlogMetadataForm"
import TagInput from "../utils/new-page/TagInput"
import CoverUpload from "./CoverUpload"

export default function BlogEditor() {
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState<string[]>([])

  const handleSubmit = async () => {
    const res = await fetch("/api/blog", {
      method: "POST",
      body: JSON.stringify({
        title,
        slug,
        excerpt,
        content,
        tags
      })
    })

    if (res.ok) {
      alert("Blog saved")
    }
  }

  return (
    <div className="space-y-6">

      <BlogMetadataForm
        title={title}
        setTitle={setTitle}
        slug={slug}
        setSlug={setSlug}
        excerpt={excerpt}
        setExcerpt={setExcerpt}
      />

      <TagInput tags={tags} setTags={setTags} />

      <MarkdownEditor value={content} onChange={setContent} />
       
      <CoverUpload/>
      
      <br />
      

      <button
        onClick={handleSubmit}
        className="px-6 py-3 rounded-xl bg-purple-600 text-white"
      >
        Publish Blog
      </button>
    </div>
  )
}