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
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            About Me
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            I’m a full-stack developer focused on building scalable systems,
            modern web applications, and AI-powered tools that solve real-world problems.
          </p>
        </div>

        {/* 👤 INTRO */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
          <p>
            Hey, I’m <span className="font-medium text-foreground">Shaan Singh</span>.  
            I enjoy turning ideas into real products — from backend systems to user-facing applications.
          </p>

          <p>
            My journey started with problem solving and DSA, and gradually evolved into
            full-stack development, system design, and AI integration.
          </p>

          <p>
            I focus on writing clean, scalable code and building projects that reflect
            real-world engineering practices — not just tutorials.
          </p>
        </div>

        {/* 🚀 WHAT I DO */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">
            What I Do
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">

            <div className="p-5 rounded-xl border bg-card space-y-2">
              <h3 className="font-medium">Full-Stack Development</h3>
              <p className="text-sm text-muted-foreground">
                Building modern web apps using Next.js, scalable backend systems,
                and clean API architectures.
              </p>
            </div>

            <div className="p-5 rounded-xl border bg-card space-y-2">
              <h3 className="font-medium">AI Integration</h3>
              <p className="text-sm text-muted-foreground">
                Developing AI-powered tools using RAG, agents, and modern LLM APIs
                like Gemini and Groq.
              </p>
            </div>

            <div className="p-5 rounded-xl border bg-card space-y-2">
              <h3 className="font-medium">System Thinking</h3>
              <p className="text-sm text-muted-foreground">
                Designing systems with scalability, performance, and real-world
                constraints in mind.
              </p>
            </div>

            <div className="p-5 rounded-xl border bg-card space-y-2">
              <h3 className="font-medium">Continuous Learning</h3>
              <p className="text-sm text-muted-foreground">
                Constantly exploring backend, DevOps, and AI to become a better engineer.
              </p>
            </div>

          </div>
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
            What I’m Aiming For
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base">
            My goal is to build impactful software, contribute to meaningful projects,
            and grow into a developer who can design and ship scalable systems end-to-end.
          </p>
        </div>

        <div>
          <ContactCard/>
        </div>

      </div>
    </section>
  );
}