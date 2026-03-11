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


export default function AiLabEditor(){
    const [title , setTitle] = useState<string>("")
    const [slug , setSlug] = useState<string>("")
    const [excerpt , setExcerpt] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [coverImage , setCoverImage] = useState<string>("")
    const [tags , setTags] = useState<string[]>([])
    const [images , setImages] = useState<string[]>([])
    const [github , setGithub] = useState<string>("")
    const [demo , setDemo] = useState<string>("")
//    const [video , setVideo] = useState<string>("")
    const [blog, setBlog] = useState<string>("")
    const [category , setCategory] = useState<AIElementCategory>("experiment")
    const [status , setStatus] = useState<AIElementStatus>("idea")
    const [tech , setTech] = useState<string[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    return(
        <>
            <AILabMetadata
                title={title}
                setTitle={setTitle}
                slug={slug}
                setSlug={setSlug}
                excerpt={excerpt}
                setExcerpt={setExcerpt}
            />

            <TagInput tags={tags} setTags={setTags} />
            <AILabCatagorySelect category={category} setCategory={setCategory}/>
            <AISelectStatus status={status} setStatus={setStatus} />
            <MarkdownEditor content={description} setContent={setDescription}/>
            <CoverUpload cover={coverImage} setCover={setCoverImage}/>
            {coverImage && <img src={coverImage} alt="Image preview" className="w-48 rounded mt-2" />} 
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
