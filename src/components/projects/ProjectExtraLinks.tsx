"use client";

type Props = {
    github?: string
    setGithub: (v : string) => void
    demo?: string
    setDemo:(v : string) => void
    highlight?: string 
    setHighlight: (v : string) => void
}

export default function ProjectExtraLinks({
    github,
    setGithub,
    demo,
    setDemo,
    highlight,
    setHighlight
}:Props){
    return (
        <div className="space-y-4 m-4">
            <input 
                placeholder="Github Link"
                value={github ?? ""}
                onChange={(e)=>setGithub?.(e.target.value)} 
                className="w-full border p-3 rounded-xl bg-card"
            />
            <input 
                placeholder="Demo link (deployed link)"
                value={demo ?? ""}
                onChange={(e)=>setDemo?.(e.target.value)} 
                className="w-full border p-3 rounded-xl bg-card"
            />
            <input 
                placeholder="Blog link for this project"
                value={highlight ?? ""}
                onChange={(e)=>setHighlight?.(e.target.value)} 
                className="w-full border p-3 rounded-xl bg-card"
            />
        </div>
    )
}