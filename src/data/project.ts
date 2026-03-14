import { Project } from "@/types/project"

export const projects: Project[] = [
{
  _id: "chat-app",
  slug: "chat-app",
  title: "Real-time Chat Application",
  excerpt: "Scalable real-time chat system using WebSockets and Redis.",
  description:
    "A scalable real-time chat system built using WebSockets and Redis Pub/Sub to enable fast messaging across multiple clients.",
  coverImage: "https://images.pexels.com/photos/5426403/pexels-photo-5426403.jpeg",
  category: "backend",
  status: "completed",
  tags: ["Next.js", "Socket.io", "Redis", "TypeScript"],
  github: "https://github.com/yourusername/chat-app",
  demo: "https://chat.yourdomain.com",
  featured: true,
  highlight: "Real-time messaging using Redis Pub/Sub architecture",
  createdAt: new Date("2025-07-15"),
  published: true
},

{
  _id: "video-calling-app",
  slug: "video-calling-app",
  title: "Video Calling Platform",
  excerpt: "Peer-to-peer video communication platform using WebRTC.",
  description:
    "A real-time video communication platform with room-based calling using WebRTC and a signaling server.",
  coverImage: "https://images.pexels.com/photos/5876447/pexels-photo-5876447.jpeg",
  category: "systems",
  status: "in-progress",
  tags: ["WebRTC", "Node.js", "Socket.io", "Next.js"],
  github: "https://github.com/yourusername/video-call",
  featured: true,
  highlight: "Peer-to-peer video streaming using WebRTC",
  createdAt: new Date("2025-09-02"),
  published: true
},

{
  _id: "ai-tool-platform",
  slug: "ai-tool-platform",
  title: "AI Tool Platform",
  excerpt: "Unified platform combining multiple AI tools.",
  description:
    "A platform combining multiple AI tools including text generation, prompt assistants, and automation agents.",
  coverImage: "https://images.pexels.com/photos/16027824/pexels-photo-16027824.jpeg",
  category: "ai",
  status: "in-progress",
  tags: ["Next.js", "OpenAI API", "LangChain", "TypeScript"],
  github: "https://github.com/yourusername/ai-tools",
  featured: false,
  highlight: "Multi-model AI tool integration with unified UI",
  createdAt: new Date("2025-10-10"),
  published: true
},

{
  _id: "airbnb-clone",
  slug: "airbnb-clone",
  title: "Airbnb Clone",
  excerpt: "Full-stack accommodation booking platform.",
  description:
    "A full-stack accommodation booking platform featuring authentication, listings, and booking management.",
  coverImage: "/projects/airbnb.png",
  category: "fullstack",
  status: "completed",
  tags: ["MongoDB", "Express", "React", "Node.js"],
  github: "https://github.com/yourusername/airbnb-clone",
  demo: "https://airbnb-demo.com",
  featured: false,
  highlight: "Full booking system with user authentication",
  createdAt: new Date("2024-12-20"),
  published: true
},

{
  _id: "personal-blog-platform",
  slug: "personal-blog-platform",
  title: "Personal Blog Platform",
  excerpt: "Markdown-based blogging platform with admin moderation.",
  description:
    "A markdown-based blogging platform with authentication, admin moderation, and content publishing.",
  coverImage: "/projects/blog-platform.png",
  category: "fullstack",
  status: "completed",
  tags: ["Next.js", "MongoDB", "JWT", "Markdown"],
  github: "https://github.com/yourusername/blog-platform",
  demo: "https://blog.yourdomain.com",
  featured: false,
  highlight: "Admin approval workflow for blog publishing",
  createdAt: new Date("2025-06-12"),
  published: true
},

{
  _id: "devops-monitoring",
  slug: "devops-monitoring",
  title: "DevOps Monitoring Setup",
  excerpt: "Monitoring stack with Prometheus and Grafana.",
  description:
    "A monitoring stack using Prometheus and Grafana to track application performance and system metrics.",
  coverImage: "/projects/devops-monitoring.png",
  category: "devops",
  status: "planned",
  tags: ["Docker", "Prometheus", "Grafana", "Linux"],
  github: "https://github.com/yourusername/devops-monitoring",
  featured: false,
  highlight: "Real-time system monitoring dashboard",
  createdAt: new Date("2026-01-05"),
  published: false
}
]