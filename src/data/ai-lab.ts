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
    image: "https://images.pexels.com/photos/16027824/pexels-photo-16027824.jpeg",
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
    image: "https://images.pexels.com/photos/15863103/pexels-photo-15863103.jpeg",
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
    image: "https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg",
    createdAt: "2026-02-12",
  },

  /* ----------------------------- */
  /* New Experiments               */
  /* ----------------------------- */

  {
    id: "ai-meeting-summarizer",
    title: "AI Meeting Summarizer",
    description:
      "Automatically converts meeting recordings into structured summaries with action items.",
    category: "experiment",
    status: "idea",
    tech: ["Whisper", "OpenAI API", "Next.js"],
    image: "/ai-lab/meeting-summarizer.png",
    createdAt: "2026-03-02",
  },

  {
    id: "ai-code-review-system",
    title: "AI Code Review System",
    description:
      "An AI-powered tool that reviews pull requests and provides feedback on code quality and security.",
    category: "experiment",
    status: "building",
    tech: ["LLM", "GitHub API", "Node.js"],
    image: "/ai-lab/code-review.png",
    github: "#",
    createdAt: "2026-03-01",
  },

  {
    id: "multi-agent-coordinator",
    title: "Multi-Agent Coordinator",
    description:
      "A system that orchestrates multiple AI agents to collaborate on complex tasks.",
    category: "experiment",
    status: "idea",
    tech: ["Agents", "LangChain", "Task Graph"],
    image: "/ai-lab/multi-agent.png",
    createdAt: "2026-02-28",
  },

  /* ----------------------------- */
  /* New Agents                    */
  /* ----------------------------- */

  {
    id: "documentation-agent",
    title: "Documentation Agent",
    description:
      "Generates documentation automatically from source code and project structure.",
    category: "agent",
    status: "idea",
    tech: ["LLM", "Code Parsing"],
    image: "/ai-lab/documentation-agent.png",
    createdAt: "2026-03-03",
  },

  {
    id: "debugging-agent",
    title: "Debugging Agent",
    description:
      "Analyzes stack traces and logs to suggest possible bug fixes.",
    category: "agent",
    status: "idea",
    tech: ["LLM", "Log Analysis"],
    image: "/ai-lab/debugging-agent.png",
    createdAt: "2026-03-03",
  },

  /* ----------------------------- */
  /* Tools                         */
  /* ----------------------------- */

  {
    id: "ai-text-refiner",
    title: "AI Text Refiner",
    description:
      "Improves grammar, tone, and clarity of written content using AI.",
    category: "tool",
    status: "completed",
    tech: ["OpenAI API", "Next.js"],
    image: "/ai-lab/text-refiner.png",
    createdAt: "2026-02-25",
  },

  {
    id: "dataset-labeling-tool",
    title: "AI Dataset Labeling Tool",
    description:
      "Assists in labeling datasets using AI predictions to speed up annotation workflows.",
    category: "tool",
    status: "idea",
    tech: ["ML", "Active Learning"],
    image: "/ai-lab/dataset-tool.png",
    createdAt: "2026-02-27",
  },

  /* ----------------------------- */
  /* Research                      */
  /* ----------------------------- */

  {
    id: "agent-collaboration-research",
    title: "Agent Collaboration Research",
    description:
      "Exploring coordination strategies for multi-agent systems solving complex tasks.",
    category: "research",
    status: "idea",
    tech: ["Multi-Agent Systems", "Planning Algorithms"],
    image: "/ai-lab/agent-research.png",
    createdAt: "2026-03-04",
  },
]