"use client"

import { useState } from "react"
import MarkdownEditor from "./MarkdownEditor"
import BlogMetadataForm from "./BlogMetadataForm"
import TagInput from "../utils/new-page/TagInput"
import CoverUpload from "./CoverUpload"
import { toast } from "react-hot-toast"

export default function BlogEditor() {
  const [title, setTitle] = useState<string>("")
  const [slug, setSlug] = useState<string>("")
  const [excerpt, setExcerpt] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [tags, setTags] = useState<string[]>([])
  const [cover,setCover] = useState("")
  const [loading , setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true);
    if (!title || !slug || !content) {
      toast.error("Title, slug and content are required")
      setLoading(false)
      return
    }
    if (!cover) {
      toast.error("Cover image is required")
      setLoading(false)
      return
    }
    try {
        const res = await fetch("/api/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          tags,
          cover
        })
      })
      if (res.ok) {
        toast.success("✅ Blog Saved Successfully")
        setTitle("")
        setSlug("")
        setExcerpt("")
        setContent("")
        setTags([])
        setCover("")
      }else{
        const er = await res.json()
        toast.error(er.error);
      }
    } catch (error) {
      toast.error("Something went wrong")
    } finally{
      setLoading(false)
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

      <MarkdownEditor content={content} setContent={setContent} />
       
      <CoverUpload cover={cover} setCover={setCover}/>
      {cover && <img src={cover} alt="Image preview" className="w-48 rounded mt-2" />}
      
      <br />
      

      <button
        disabled={loading}
        onClick={handleSubmit}
        className="px-6 py-3 rounded-xl bg-purple-600 text-white"
      >
        {loading ? "Uploading..." : "Publish Blog"}
      </button>
    </div>
  )
}