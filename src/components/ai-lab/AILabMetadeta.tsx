"use client";

import { useEffect , useState } from "react"

type Props = {
    title: string
    setTitle: (v : string) => void
    slug: string
    setSlug: (v : string) => void
    excerpt: string
    setExcerpt: (v : string) => void
    tech: string[]
    setTech: (v: string[]) => void
}


export default function AILabMetadata(
    {
        title,
        setTitle,
        slug,
        setSlug,
        excerpt,
        setExcerpt,
        tech,
        setTech,
    }:Props
){

    const [input, setInput] = useState("")
   useEffect(() => {
    const generatedSlug = title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")

    setSlug(generatedSlug)
    }, [title, setSlug])
    
      const addTech = () => {
        const trimmed = input
                            .trim()
                            .replace(/\s+/g,"-")
                            .replace(/[^a-z0-9-]/g, "");
    
        if (!trimmed) return
        if (tech.includes(trimmed)) return
    
        setTech([...tech, trimmed])
        setInput("")
      }
    
      const removeTag = (tag: string) => {
        setTech(tech.filter(t => t !== tag))
      }
    return(
        <div className="space-y-4 m-4">
            <input 
                placeholder="AI Experiment Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)} 
                className="w-full border p-3 rounded-xl bg-card"
            />
            <input 
                placeholder="Slug (example: openclaw-clone)"
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

            <div className="flex gap-2 m-4">
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add tag"
                className="border p-2 rounded-xl bg-card"
                onKeyDown={(e) => {
                if (e.key === "Enter"){
                    e.preventDefault()
                    addTech()
                }
                }}
                />

                <button onClick={addTech} className="px-3 py-2 bg-purple-600 text-white rounded">
                Add
                </button>
            </div>

            <div className="flex gap-2 mt-2 flex-wrap">
                {tech.map(tag => (
                <span
                    key={tag}
                    className="px-2 py-1 bg-card border border-border rounded cursor-pointer"
                    onClick={() => removeTag(tag)}
                >
                    {tag}
                </span>
                ))}
            </div>

                </div>
    )
}
