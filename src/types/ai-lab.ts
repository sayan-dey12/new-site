export type AIElementCategory = | "experiment" | "agent" | "tool" | "research"

export type AIElementStatus = | "idea" | "building" | "completed" | "archived"

export type AIElement = {
  id: string
  title: string
  description: string

  category: AIElementCategory
  status: AIElementStatus

  tech: string[]

  image: string

  github?: string
  demo?: string
  blog?: string

  createdAt: string
}