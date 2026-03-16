"use client";

import { AIElementCategory, AIElementStatus } from "@/types/ai-lab";
import { useState } from "react";
import AILabMetadata from "./AILabMetadeta";
import TagInput from "../utils/new-page/TagInput";
import AILabCatagorySelect from "./AILabCatagorySelect";
import AISelectStatus from "./AISelectStatus";
import MarkdownEditor from "../blog/MarkdownEditor";
import CoverUpload from "../blog/CoverUpload";
import ProjectImagesUpload from "../projects/ProjectImageUpload";
import ProjectExtraLinks from "../projects/ProjectExtraLinks";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { AIElement } from "@/types/ai-lab";

type Props = {
  initialData? : AIElement
}


export default function AiLabEditor({initialData}: Props){
    const [title , setTitle] = useState<string>( initialData?.title || "")
    const [slug , setSlug] = useState<string>( initialData?.slug || "")
    const [excerpt , setExcerpt] = useState<string>( initialData?.excerpt || "")
    const [description, setDescription] = useState<string>( initialData?.description || "")
    const [coverImage , setCoverImage] = useState<string>( initialData?.coverImage || "")
    const [tags , setTags] = useState<string[]>( initialData?.tags || [])
    const [images , setImages] = useState<string[]>( initialData?.images || [])
    const [github , setGithub] = useState<string>( initialData?.github || "")
    const [demo , setDemo] = useState<string>( initialData?.demo || "")
    //const [video , setVideo] = useState<string>("")
    const [blog, setBlog] = useState<string>( initialData?.blog || "")
    const [category , setCategory] = useState<AIElementCategory>( initialData?.category || "experiment")
    const [status , setStatus] = useState<AIElementStatus>( initialData?.status || "idea")
    const [tech , setTech] = useState<string[]>( initialData?.tech || [])
    const [loading, setLoading] = useState<boolean>(false)

    const handleSubmit = async () => {
        setLoading(true);
        if (!title || !slug || !description) {
          toast.error("Title, slug and content are required")
          setLoading(false)
          return
        }
        if (!coverImage) {
          toast.error("Cover image is required")
          setLoading(false)
          return
        }
        if (!category) {
          toast.error("Category is required")
          setLoading(false)
          return
        }
        try {

          const url = initialData ? `/api/ai-lab/${initialData.slug}` : `/api/ai-lab`
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
              description,
              tags,
              coverImage,
              category,
              github,
              demo,
              blog,
              status,
              images,
              tech

            })
          })
          if (res.ok) {
            toast.success(initialData
            ? "AI Project updated successfully"
            : "AI Project created successfully")
            setTitle("")
            setSlug("")
            setExcerpt("")
            setDescription("")
            setTags([])
            setTech([])
            setCoverImage("")
            setCategory("experiment")
            setGithub("")
            setDemo("")
            setBlog("")
            setImages([])
            setStatus("idea")
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

    return(
        <>
            <AILabMetadata
                title={title}
                setTitle={setTitle}
                slug={slug}
                setSlug={setSlug}
                excerpt={excerpt}
                setExcerpt={setExcerpt}
                tech={tech}
                setTech={setTech}
            />

            <TagInput tags={tags} setTags={setTags} />
            <AILabCatagorySelect category={category} setCategory={setCategory}/>
            <AISelectStatus status={status} setStatus={setStatus} />
            <MarkdownEditor content={description} setContent={setDescription}/>
            <CoverUpload cover={coverImage} setCover={setCoverImage}/>
            <CoverUpload cover={coverImage} setCover={setCoverImage}/>
              {coverImage && (
                  <Image
                      src={coverImage}
                      alt="Image preview"
                      width={200}
                      height={120}
                      className="rounded mt-2"
                      />
                  )}
            <ProjectImagesUpload images={images} setImages={setImages}/>
            <ProjectExtraLinks 
                github={github}
                setGithub={setGithub}
                demo={demo}
                setDemo={setDemo}
                highlight={blog}
                setHighlight={setBlog}
            />           
        <br />
      

        <button
            disabled={loading}
            onClick={handleSubmit}
            className="px-6 py-3 rounded-xl bg-purple-600 text-white"
        >
            {loading ? "Uploading..." : "Upload Project"}
        </button>
            
        </>
    )
}
