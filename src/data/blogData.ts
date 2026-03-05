import { BlogType } from "@/types/blog";

export const blogs:BlogType[] = [
{
  _id: "68866660f85b6b63bd7e407f",
  title: "Getting Started with React",
  slug: "getting-started-with-react",
  content: "React is a powerful JavaScript library for building user interfaces. It breaks your UI into components.\r\n\r\n![React Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)\r\n### Key Concepts:\n- **JSX**: JavaScript + XML\n- **Components**: Reusable UI blocks\n- **State & Props**: For dynamic behavior\n\nStart by creating a component like this:\n```jsx\nfunction Welcome() {\n  return <h1>Hello, React!</h1>;\n}\n```",
  excerpt: "A beginner-friendly guide to building your first React application and understanding components, props, and state.",
  coverImage: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753638497/blog-covers/bitdogjfwvrwzxupssjr.jpg",
  tags: ["react", "javascript", "frontend"],
  authorId: "6885e9e9e12c8bbaf19f582a",
  createdAt: "2025-07-27T17:48:16.786Z",
  authorName: "Sayan Dey",
  published: true
},
{
  _id: "68866858f85b6b63bd7e4083",
  title: "Introduction to Next.js for Full Stack Development",
  slug: "intro-to-nextjs-fullstack",
  content: "Next.js is a full-stack framework built on React. It supports SSR, SSG, API routes, and more.\r\n\r\n![Next.js Diagram](https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753638805/blog-images/cv3fosoj8wc60bnh3f69.png)\r\n### Features:\n- File-based routing\n- API routes for backend logic\n- Image optimization\n\nExample of a simple API route:\n```ts\nexport default function handler(req, res) {\n  res.status(200).json({ message: \"Hello API!\" });\n}\n```",
  excerpt: "Learn how Next.js enables server-side rendering, routing, and full-stack capabilities with API routes.",
  coverImage: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639000/blog-covers/vssrtsbie3l8jrdobfmx.jpg",
  tags: ["nextjs", "fullstack", "javascript"],
  authorId: "6885e9e9e12c8bbaf19f582a",
  createdAt: "2025-07-27T17:56:40.291Z",
  authorName: "Sayan Dey",
  published: true
},
{
  _id: "688669b3f85b6b63bd7e4087",
  title: "Understanding JavaScript Promises",
  slug: "understanding-javascript-promises",
  content: "Promises are used to handle asynchronous tasks in JavaScript.\r\n\r\n![Async Flow](https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639219/blog-images/lxy39mohwfr9idhshxyw.jpg)\r\n\n```js\nconst fetchData = () => {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(\"Data loaded\"), 1000);\n  });\n};\n\nfetchData().then(console.log);\n```",
  excerpt: "Promises help manage asynchronous operations. Learn how to use them with `.then()`, `catch()`, and `async/await`.",
  coverImage: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639347/blog-covers/o5b9ktchdyp5zpf0iwhk.jpg",
  tags: ["javascript", "async", "promises"],
  authorId: "6885e9e9e12c8bbaf19f582a",
  createdAt: "2025-07-27T18:02:27.587Z",
  authorName: "Sayan Dey",
  published: true
},
{
  _id: "68866a8df85b6b63bd7e408f",
  title: "Deploying Your App with Vercel",
  slug: "deploy-with-vercel",
  content: "Vercel is a platform for deploying frontend frameworks like Next.js. It supports automatic builds from GitHub.\r\n\r\n![Vercel](https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png)\r\n\r\n### Steps:\r\n1. Push code to GitHub\r\n2. Import in Vercel\r\n3. Set environment variables (if needed)\r\n4. Click Deploy 🚀",
  excerpt: "Vercel makes deployment seamless for frontend and full-stack apps. Learn how to deploy in minutes.",
  coverImage: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639565/blog-covers/qnxkzl3rpcgynkpywfo9.png",
  tags: ["deployment", "vercel", "frontend"],
  authorId: "6885e9e9e12c8bbaf19f582a",
  createdAt: "2025-07-27T18:06:05.041Z",
  authorName: "Sayan Dey",
  published: true
},

{
  _id: "68866b46f85b6b63bd7e4093",
  title: "Top 5 VS Code Extensions for Web Developers",
  slug: "top-vscode-extensions",
  content: "VS Code is a powerful editor, and extensions make it even better.\r\n\r\n![VS Code](https://code.visualstudio.com/assets/images/code-stable.png)\r\n\r\n### Must-Have Extensions:\r\n- **ESLint**: For linting JS/TS code\r\n- **Prettier**: Code formatting\r\n- **GitLens**: Enhanced git history\r\n- **Tailwind CSS IntelliSense**\r\n- **Thunder Client**: REST API testing",
  excerpt: "Enhance your productivity with these top VS Code extensions every web developer should install.",
  coverImage: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639750/blog-covers/abxdvsoyfn2ss8tgwdp1.jpg",
  tags: ["vscode", "productivity", "tools"],
  authorId: "6885e9e9e12c8bbaf19f582a",
  createdAt: "2025-07-27T18:09:10.059Z",
  authorName: "Sayan Dey",
  published: true
},

{
  _id: "68866c02f85b6b63bd7e4097",
  title: "Building a Personal Blog with Markdown and Next.js",
  slug: "personal-blog-with-markdown",
  content: "You can build a blog with Markdown and Next.js using `getStaticProps` and `gray-matter`.\r\n\r\n![Markdown Editor](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg)\r\n\r\n```ts\r\nimport matter from 'gray-matter';\r\nconst content = matter.read('my-post.md');\r\nconsole.log(content.data.title);\r\n```\r\n\r\nRender markdown with libraries like `remark` or `react-markdown`.",
  excerpt: "Create a fast and customizable personal blog using markdown files and Next.js file-based routing.",
  coverImage: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753639939/blog-covers/yj4ymt3eefvcx3k2imi5.png",
  tags: ["blog", "markdown", "nextjs"],
  authorId: "6885e9e9e12c8bbaf19f582a",
  createdAt: "2025-07-27T18:12:18.660Z",
  authorName: "Sayan Dey",
  published: false
},

{
  _id: "68866eb3f85b6b63bd7e40dc",
  title: "Mastering Git and GitHub for Collaboration",
  slug: "mastering-git-github",
  content: "Git is a distributed version control system that helps developers track changes and collaborate efficiently. GitHub adds cloud-based repository management and collaboration tools.\r\n\r\n![GitHub UI](https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753640570/blog-images/r8likcsturuythqeqbit.webp)\r\n\r\n### Common Git Commands\r\n```bash\r\ngit init\r\ngit add .\r\ngit commit -m \"msg\"\r\ngit push origin main\r\n```\r\n\r\n### Tips for GitHub Collaboration\r\n- Create issues to discuss tasks\r\n- Use Pull Requests (PRs)\r\n- Use branches for features\r\n- Start contributing to open source today!",
  excerpt: "Learn how to use Git and GitHub to manage code versions, collaborate with teams, and contribute to open source.",
  coverImage: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753640628/blog-covers/xwscr742lzizdoryzgqn.jpg",
  tags: ["git", "github", "version-control"],
  authorId: "6885e9e9e12c8bbaf19f582a",
  createdAt: "2025-07-27T18:23:47.735Z",
  authorName: "Sayan Dey",
  published: false
},

{
  _id: "68867146f85b6b63bd7e40e0",
  title: "How to Build a Chat App with WebSockets",
  slug: "build-chat-app-websockets",
  content: "WebSockets enable two-way communication between the browser and server in real time. You can use `Socket.IO` to make building chat apps easy.\r\n\r\n![WebSocket](https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753641254/blog-images/iiumt6g69ubtkls9dpqn.png)\r\n\r\n### Backend (Node.js + Socket.IO)\r\n```js\r\nconst io = require('socket.io')(3000);\r\nio.on('connection', socket => {\r\n  socket.on('chat message', msg => {\r\n    io.emit('chat message', msg);\r\n  });\r\n});\r\n```\r\n\r\n### Frontend Example\r\n```html\r\n<script>\r\nconst socket = io();\r\nsocket.on('chat message', msg => {\r\nconsole.log(msg);\r\n});\r\n</script>\r\n```\r\n\r\nThis can scale with Redis pub/sub for multi-instance apps.",
  excerpt: "Real-time messaging made easy using WebSockets, Node.js, and a simple frontend UI. Build your own chat app today!",
  coverImage: "https://res.cloudinary.com/dnc8k4jsv/image/upload/v1753641286/blog-covers/qyezuy93oe7xlgo25nqm.png",
  tags: ["websockets", "real-time", "nodejs", "chat-app"],
  authorId: "6885e9e9e12c8bbaf19f582a",
  createdAt: "2025-07-27T18:34:46.075Z",
  authorName: "Sayan Dey",
  published: true
}


];