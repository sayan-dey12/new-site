"use client";

import { useEffect } from "react"

type Props = {
    title: string
    setTitle: (v : string) => void
    slug: string
    setSlug: (v : string) => void
    excerpt: string
    setExcerpt: (v : string) => void
}


export default function ProjectMetadata(
    {
        title,
        setTitle,
        slug,
        setSlug,
        excerpt,
        setExcerpt
    }:Props
){

    useEffect(() => {
        if (!slug) {
            setSlug(
            title
                .toLowerCase()
                .trim()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "")
            )
        }
        }, [title, slug, setSlug])
    return(
        <div className="space-y-4 m-4">
            <input 
                placeholder="Project Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)} 
                className="w-full border p-3 rounded-xl bg-card"
            />
            <input 
                placeholder="Slug (example: online-web-ide-with-ai)"
                value={slug}
                onChange={(e)=>setSlug(e.target.value)} 
                className="w-full border p-3 rounded-xl bg-card"
            />
            <textarea 
                placeholder="Short excerpt..."
                value={excerpt}
                onChange={(e)=>setExcerpt(e.target.value)} 
                className="w-full border p-3 rounded-xl bg-card"
            />
        </div>
    )
}
