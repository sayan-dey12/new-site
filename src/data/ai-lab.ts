import { AIElement } from "@/types/ai-lab"

export const aiElements: AIElement[] = [
  {
    id: "ai-tool-platform",
    title: "AI Tool Platform",
    description:
      "A unified AI platform combining chat assistants, image generation, and developer productivity tools.",
    category: "experiment",
    status: "building",
    tech: ["Next.js", "OpenAI API", "Redis", "TypeScript"],
    image: "/ai-lab/ai-platform.png",
    github: "https://github.com/sayan-dey12",
    demo: "#",
    createdAt: "2026-02-10",
  },

  {
    id: "coding-agent",
    title: "AI Coding Agent",
    description:
      "An autonomous agent that analyzes codebases and suggests improvements.",
    category: "agent",
    status: "building",
    tech: ["LLM", "Node.js", "AST Analysis"],
    image: "/ai-lab/coding-agent.png",
    createdAt: "2026-02-15",
  },

  {
    id: "research-agent",
    title: "Research Agent",
    description:
      "An AI agent that searches the web and produces structured summaries.",
    category: "agent",
    status: "idea",
    tech: ["OpenAI", "Search APIs", "RAG"],
    image: "/ai-lab/research-agent.png",
    createdAt: "2026-02-20",
  },

  {
    id: "rag-knowledge-base",
    title: "RAG Knowledge Base",
    description:
      "An AI system that answers questions using a custom knowledge base powered by RAG.",
    category: "experiment",
    status: "idea",
    tech: ["Vector DB", "Embeddings", "LangChain"],
    image: "/ai-lab/rag-system.png",
    github: "#",
    createdAt: "2026-02-18",
  },

  {
    id: "prompt-playground",
    title: "Prompt Engineering Playground",
    description:
      "A tool to experiment with prompt engineering strategies and compare outputs.",
    category: "tool",
    status: "building",
    tech: ["Next.js", "OpenAI API"],
    image: "/ai-lab/prompt-playground.png",
    createdAt: "2026-02-12",
  },
]