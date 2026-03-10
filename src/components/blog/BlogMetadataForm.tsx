import { useEffect } from "react"

type Props = {
  title: string
  setTitle: (v: string) => void
  slug: string
  setSlug: (v: string) => void
  excerpt: string
  setExcerpt: (v: string) => void
}

export default function BlogMetadataForm({
  title,
  setTitle,
  slug,
  setSlug,
  excerpt,
  setExcerpt
}: Props) {

  useEffect(() => {
        const generatedSlug = title
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-]/g, "")
    
        setSlug(generatedSlug)
        }, [title, setSlug])
  return (
    <div className="space-y-4 m-4">

      <input
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-3 rounded-xl bg-card"
      />

      <input
        placeholder="Slug (example: building-a-chat-app)"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="w-full border p-3 rounded-xl bg-card"
      />

      <textarea
        placeholder="Short excerpt..."
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
        className="w-full border p-3 rounded-xl bg-card"
      />
    </div>
  )
}