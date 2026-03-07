export type AIElementCategory = | "experiment" | "agent" | "tool" | "research"

export type AIElementStatus = | "idea" | "building" | "completed" | "archived"

export type AIElement = {
  _id: string
  title: string
  slug: string
  excerpt: string
  description: string

  category: AIElementCategory
  status: AIElementStatus

  tech: string[]
  coverImage: string
  images?: string[]

  tags: string[]

  github?: string
  demo?: string
  blog?: string

  featured: boolean

  createdAt: string
  updatedAt: string
}