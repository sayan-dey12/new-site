import { BlogType } from "@/types/blog";

export const blogs: BlogType[] = [
{
  _id: "68866660f85b6b63bd7e407f",
  title: "Getting Started with React", 
  slug: "getting-started-with-react",
  content: "React is a powerful JavaScript library for building user interfaces. It breaks your UI into components.\r\n\r\n![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)\r\n### Key Concepts:\n- **JSX**: JavaScript + XML\n- **Components**: Reusable UI blocks\n- **State & Props**: For dynamic behavior\n\nStart by creating a component like this:\n```jsx\nfunction Welcome() {\n  return <h1>Hello, React!</h1>;\n}\n```",
  excerpt: "A beginner-friendly guide to building your first React application and understanding components, props, and state.",
  cover: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753638497/blog-covers/bitdogjfwvrwzxupssjr.jpg",
  tags: ["react", "javascript", "frontend"],
  createdAt: new Date("2025-07-27T17:48:16.786Z"),
  authorName: "Sayan Dey",
  featured: true,
  published: true
},

{
  _id: "68866858f85b6b63bd7e4083",
  title: "Introduction to Next.js for Full Stack Development",
  slug: "intro-to-nextjs-fullstack",
  content: "Next.js is a full-stack framework built on React. It supports SSR, SSG, API routes, and more.\r\n\r\n![Next.js Diagram](https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753638805/blog-images/cv3fosoj8wc60bnh3f69.png)\r\n### Features:\n- File-based routing\n- API routes for backend logic\n- Image optimization\n\nExample of a simple API route:\n```ts\nexport default function handler(req, res) {\n  res.status(200).json({ message: \"Hello API!\" });\n}\n```",
  excerpt: "Learn how Next.js enables server-side rendering, routing, and full-stack capabilities with API routes.",
  cover: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639000/blog-covers/vssrtsbie3l8jrdobfmx.jpg",
  tags: ["nextjs", "fullstack", "javascript"],
  createdAt: new Date("2025-07-27T17:56:40.291Z"),
  authorName: "Sayan Dey",
  featured: true,
  published: true
},

{
  _id: "688669b3f85b6b63bd7e4087",
  title: "Understanding JavaScript Promises",
  slug: "understanding-javascript-promises",
  content: "Promises are used to handle asynchronous tasks in JavaScript.\r\n\r\n![Async Flow](https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639219/blog-images/lxy39mohwfr9idhshxyw.jpg)\r\n\n```js\nconst fetchData = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"Data loaded\"), 1000);\n  });\n};\n\nfetchData().then(console.log);\n```",
  excerpt: "Promises help manage asynchronous operations. Learn how to use them with `.then()`, `catch()`, and `async/await`.",
  cover: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639347/blog-covers/o5b9ktchdyp5zpf0iwhk.jpg",
  tags: ["javascript", "async", "promises"],
  createdAt: new Date("2025-07-27T18:02:27.587Z"),
  authorName: "Sayan Dey",
  featured: false,
  published: true
},

{
  _id: "68866a8df85b6b63bd7e408f",
  title: "Deploying Your App with Vercel",
  slug: "deploy-with-vercel",
  content: "Vercel is a platform for deploying frontend frameworks like Next.js...",
  excerpt: "Vercel makes deployment seamless for frontend and full-stack apps.",
  cover: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639565/blog-covers/qnxkzl3rpcgynkpywfo9.png",
  tags: ["deployment", "vercel", "frontend"],
  createdAt: new Date("2025-07-27T18:06:05.041Z"),
  authorName: "Sayan Dey",
  featured: false,
  published: true
},

{
  _id: "68866b46f85b6b63bd7e4093",
  title: "Top 5 VS Code Extensions for Web Developers",
  slug: "top-vscode-extensions",
  content: "VS Code is a powerful editor...",
  excerpt: "Enhance your productivity with these top VS Code extensions.",
  cover: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639750/blog-covers/abxdvsoyfn2ss8tgwdp1.jpg",
  tags: ["vscode", "productivity", "tools"],
  createdAt: new Date("2025-07-27T18:09:10.059Z"),
  authorName: "Sayan Dey",
  featured: false,
  published: true
},

{
  _id: "68866c02f85b6b63bd7e4097",
  title: "Building a Personal Blog with Markdown and Next.js",
  slug: "personal-blog-with-markdown",
  content: "You can build a blog with Markdown and Next.js...",
  excerpt: "Create a fast and customizable personal blog.",
  cover: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639939/blog-covers/yj4ymt3eefvcx3k2imi5.png",
  tags: ["blog", "markdown", "nextjs"],
  createdAt: new Date("2025-07-27T18:12:18.660Z"),
  authorName: "Sayan Dey",
  featured: false,
  published: false
},

{
  _id: "68866eb3f85b6b63bd7e40dc",
  title: "Mastering Git and GitHub for Collaboration",
  slug: "mastering-git-github",
  content: "Git is a distributed version control system...",
  excerpt: "Learn how to use Git and GitHub to manage code versions.",
  cover: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753640628/blog-covers/xwscr742lzizdoryzgqn.jpg",
  tags: ["git", "github", "version-control"],
  createdAt: new Date("2025-07-27T18:23:47.735Z"),
  authorName: "Sayan Dey",
  featured: false,
  published: false
},

{
  _id: "68867146f85b6b63bd7e40e0",
  title: "How to Build a Chat App with WebSockets",
  slug: "build-chat-app-websockets",
  content: "WebSockets enable two-way communication...",
  excerpt: "Real-time messaging made easy using WebSockets.",
  cover: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753641286/blog-covers/qyezuy93oe7xlgo25nqm.png",
  tags: ["websockets", "real-time", "nodejs", "chat-app"],
  createdAt: new Date("2025-07-27T18:34:46.075Z"),
  authorName: "Sayan Dey",
  featured: true,
  published: true
}
];