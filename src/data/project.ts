import { Project } from "@/types/project"

export const projects: Project[] = [
  {
    id: "chat-app",
    title: "Real-time Chat Application",
    description:
      "A scalable real-time chat system built using WebSockets and Redis Pub/Sub to enable fast messaging across multiple clients.",
    image: "https://images.pexels.com/photos/5426403/pexels-photo-5426403.jpeg",
    category: "backend",
    status: "completed",
    tags: ["Next.js", "Socket.io", "Redis", "TypeScript"],
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat.yourdomain.com",
    visibility: "featured",
    highlight: "Real-time messaging using Redis Pub/Sub architecture",
    createdAt: "2025-07-15",
  },

  {
    id: "video-calling-app",
    title: "Video Calling Platform",
    description:
      "A real-time video communication platform with room-based calling using WebRTC and a signaling server.",
    image: "https://images.pexels.com/photos/5876447/pexels-photo-5876447.jpeg",
    category: "systems",
    status: "in-progress",
    tags: ["WebRTC", "Node.js", "Socket.io", "Next.js"],
    github: "https://github.com/yourusername/video-call",
    visibility: "featured",
    highlight: "Peer-to-peer video streaming using WebRTC",
    createdAt: "2025-09-02",
  },

  {
    id: "ai-tool-platform",
    title: "AI Tool Platform",
    description:
      "A platform combining multiple AI tools including text generation, prompt assistants, and automation agents.",
    image: "https://images.pexels.com/photos/16027824/pexels-photo-16027824.jpeg",
    category: "ai",
    status: "in-progress",
    tags: ["Next.js", "OpenAI API", "LangChain", "TypeScript"],
    github: "https://github.com/yourusername/ai-tools",
    visibility: "normal",
    highlight: "Multi-model AI tool integration with unified UI",
    createdAt: "2025-10-10",
  },

  {
    id: "airbnb-clone",
    title: "Airbnb Clone",
    description:
      "A full-stack accommodation booking platform featuring authentication, listings, and booking management.",
    image: "/projects/airbnb.png",
    category: "fullstack",
    status: "completed",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/yourusername/airbnb-clone",
    demo: "https://airbnb-demo.com",
    visibility: "normal",
    highlight: "Full booking system with user authentication",
    createdAt: "2024-12-20",
  },

  {
    id: "personal-blog-platform",
    title: "Personal Blog Platform",
    description:
      "A markdown-based blogging platform with authentication, admin moderation, and content publishing.",
    image: "/projects/blog-platform.png",
    category: "fullstack",
    status: "completed",
    tags: ["Next.js", "MongoDB", "JWT", "Markdown"],
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog.yourdomain.com",
    visibility: "normal",
    highlight: "Admin approval workflow for blog publishing",
    createdAt: "2025-06-12",
  },

  {
    id: "devops-monitoring",
    title: "DevOps Monitoring Setup",
    description:
      "A monitoring stack using Prometheus and Grafana to track application performance and system metrics.",
    image: "/projects/devops-monitoring.png",
    category: "devops",
    status: "planned",
    tags: ["Docker", "Prometheus", "Grafana", "Linux"],
    github: "https://github.com/yourusername/devops-monitoring",
    visibility: "normal",
    highlight: "Real-time system monitoring dashboard",
    createdAt: "2026-01-05",
  },
]