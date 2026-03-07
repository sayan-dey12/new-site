export type ProjectStatus = | "completed" | "in-progress" | "planned"

export type ProjectCategory = | "fullstack" | "backend" | "frontend" | "ai" | "devops" | "systems"

export type Project = {
  _id: string
  title: string
  excerpt: string
  description: string
  slug:string
  coverImage: string

  images?: string[]
  category: ProjectCategory
  status: ProjectStatus

  tags: string[]

  github?: string
  demo?: string
  video?: string

  featured: boolean

  highlight?: string

  createdAt: string
  updatedAt?: string
  published: boolean
}