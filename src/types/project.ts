export type ProjectStatus = | "completed" | "in-progress" | "planned"

export type ProjectCategory = | "fullstack" | "backend" | "frontend" | "ai" | "devops" | "systems"

export type Project = {
  id: string
  title: string
  description: string
  image: string

  category: ProjectCategory
  status: ProjectStatus

  tags: string[]

  github?: string
  demo?: string
  video?: string

  visibility?: "featured" | "normal"

  highlight?: string

  createdAt?: string
}