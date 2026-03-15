"use client"

import { useState } from "react"
import MarkdownEditor from "./MarkdownEditor"
import BlogMetadataForm from "./BlogMetadataForm"
import TagInput from "../utils/new-page/TagInput"
import CoverUpload from "./CoverUpload"
import { toast } from "react-hot-toast"
import CatagorySelect from "../utils/CatagorySelect"
import CatagoryInput from "../utils/CatagoryInput"
import Image from "next/image"
import { BlogType } from "@/types/blog"

type Props = {
  initialData?: BlogType
}

export default function BlogEditor({ initialData }: Props) {
  const [title, setTitle] = useState<string>(initialData?.title || "")
  const [slug, setSlug] = useState<string>(initialData?.slug || "")
  const [excerpt, setExcerpt] = useState<string>(initialData?.excerpt || "")
  const [content, setContent] = useState<string>(initialData?.content || "")
  const [tags, setTags] = useState<string[]>(initialData?.tags || [])
  const [cover,setCover] = useState(initialData?.cover || "")
  const [loading , setLoading] = useState(false)
  const [catagory , setCatagory] = useState(initialData?.catagory || "")

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
    if (!catagory) {
      toast.error("Category is required")
      setLoading(false)
      return
    }
    try {

      const url = initialData ? `/api/blog/${initialData.slug}` : `/api/blog`
      const method = initialData ? "PUT" : "POST"

        const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          tags,
          cover,
          catagory
        })
      })
      if (res.ok) {
        toast.success( initialData
        ? "Blog updated successfully"
        : "Blog created successfully")
        setTitle("")
        setSlug("")
        setExcerpt("")
        setContent("")
        setTags([])
        setCover("")
        setCatagory("")
      }else{
        const er = await res.json()
        toast.error(er.error);
      }
    } catch (error) {
      console.error(error)
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

      <CatagorySelect catagory={catagory} setCatagory={setCatagory} />
      <CatagoryInput catagory={catagory} setCatagory={setCatagory}/>

      <MarkdownEditor content={content} setContent={setContent} />
       
     <CoverUpload cover={cover} setCover={setCover} />

    {cover && (
      <Image
        src={cover}
        alt="Image preview"
        width={200}
        height={120}
        className="rounded mt-2"
      />
    )}
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