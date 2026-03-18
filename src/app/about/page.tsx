import ContactCard from "@/components/home/CTA/ContactCard";
import TechStackSection from "@/components/home/techStack/TechStackSection";

export const metadata = {
  title: "About Me | Shaan Singh",
  description:
    "Learn more about Shaan Singh, a full-stack developer building scalable systems and AI-powered applications.",
};

export default function AboutPage() {
  return (
    <section className="px-5 py-16">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* 🔥 HERO */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            I&apos;m a developer focused on building real-world products — combining full-stack engineering,
            system design, and AI to create scalable and useful applications.
          </p>
        </div>

        {/* 👤 INTRO */}
        <div className="space-y-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p>
            Hey, I&apos;m <span className="font-medium text-foreground">Sayan Dey</span> , a Computer Science student and developer who enjoys building things that actually work in the real world.
          </p>

          <p>
            I started with problem solving and Data Structures & Algorithms, where I built a foundation in thinking logically and breaking down complex problems. Over time, I transitioned into full-stack development — not just to learn frameworks, but to understand how real systems are designed and shipped.
          </p>

          <p>
            I&apos;ve worked on projects like a full-stack Airbnb clone, a blog platform with authentication and admin workflows, and a real-time chat application using WebSockets and Redis and this website also. These projects helped me move beyond tutorials and start thinking like an engineer.
          </p>

          <p>
            Currently in my third year of Computer Science, I&apos;m exploring backend architecture, DevOps practices, and AI integration — building systems that are not only functional, but scalable and production-ready.
          </p>
        </div>

        {/* 🚀 WHAT I DO */}
        <div className="p-5 rounded-xl border bg-card space-y-2">
          <h3 className="font-medium">Full-Stack Development</h3>
          <p className="text-sm text-muted-foreground">
            Building end-to-end applications using Next.js and the MERN stack — working across frontend, backend, and databases. I focus on authentication systems, API design, and creating production-like features rather than just demo apps.
          </p>
        </div>

        <div className="p-5 rounded-xl border bg-card space-y-2">
          <h3 className="font-medium">Backend & Systems</h3>
          <p className="text-sm text-muted-foreground">
            Designing scalable backend systems with Node.js, Express, and databases like MongoDB , PostgreSQL and Redis. I explore system design concepts like caching, real-time communication (WebSockets), and performance optimization.
          </p>
        </div>

        <div className="p-5 rounded-xl border bg-card space-y-2">
          <h3 className="font-medium">AI Integration</h3>
          <p className="text-sm text-muted-foreground">
            Building AI-powered features using LLM APIs, RAG pipelines, and agent-based workflows. I experiment with agentic AI systems where multiple models and tools interact to solve complex tasks inside real applications.
          </p>
        </div>

        <div className="p-5 rounded-xl border bg-card space-y-2">
          <h3 className="font-medium">Learning Mindset</h3>
          <p className="text-sm text-muted-foreground">
            Continuously learning backend, DevOps, and advanced engineering concepts with a long-term goal of building impactful products.
          </p>
        </div>

        {/* 🛠️ TECH STACK */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Tech I Work With
          </h2>

          <TechStackSection />
        </div>

        {/* 🎯 GOAL / VISION */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold">
            What I&apos;m Aiming For
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            I&apos;m not just aiming to get good at coding — I want to become someone who can design,
            build, and scale complete products from scratch. My focus is on becoming a strong
            engineer with the ability to turn ideas into real, impactful software.
          </p>
        </div>

        <div>
          <ContactCard/>
        </div>

      </div>
    </section>
  );
}