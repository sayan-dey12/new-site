
import AiLabSection from "@/components/home/AiLabSection/AiLabSection";
import BlogSection from "@/components/home/BlogsSection/BlogSection";
import CTASection from "@/components/home/CTA/CTASection";
import FeaturedProjectsSection from "@/components/home/FeaturedProjectSection/FeaturedProjectsSection";
import HeroSection from "@/components/home/heroSection/heroSection";
import ProofOfWorkSection from "@/components/home/proofOfWorkSection/ProofOfWorkSection";
import TechStackSection from "@/components/home/techStack/TechStackSection";
import { Metadata } from "next"

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  title: "Sayan Dey | Full Stack Developer & AI Engineer",

  description:
    "Hi, I'm Sayan Dey. I build full-stack applications, AI tools, and scalable backend systems. Explore my projects, blogs, and AI lab.",

  keywords: [
    "Sayan Dey",
    "full stack developer",
    "AI engineer",
    "developer portfolio",
    "Next.js developer",
    "backend developer",
    "AI projects",
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Sayan Builds | Full Stack Developer & AI Engineer",
    description:
      "Explore projects, blogs, and AI tools built by Sayan Dey.",
    url: `${baseUrl}/`,
    siteName: "Sayan Builds",
    images: [
      {
        url: `${baseUrl}/default.jpg`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sayan Builds",
    description:
      "Full-stack developer building AI tools and scalable applications.",
    images: [`${baseUrl}/default.jpg`],
  },

  alternates: {
    canonical: `${baseUrl}/`,
  },
}


export default function Home() {
  return (
    <>
      <HeroSection/>
      <ProofOfWorkSection/>
      <AiLabSection/>
      <FeaturedProjectsSection/>
      <BlogSection/>
      <TechStackSection/>
      <CTASection/>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",

          "@id": `${baseUrl}/#person`,

          name: "Sayan Dey",
          url: baseUrl,

          image: `${baseUrl}/default.jpg`,

          jobTitle: "Full Stack Developer & AI Engineer",

          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": baseUrl,
          },

          sameAs: [
            "https://github.com/sayan-dey12",
            "https://www.linkedin.com/in/sayan-dey-b37843378/",
            "https://x.com/sayan_dey12",
            "https://www.instagram.com/sayan_.dey_",
          ],

          worksFor: {
            "@type": "Organization",
            name: "Sayan Builds",
          },

          knowsAbout: [
            "Full Stack Development",
            "Next.js",
            "TypeScript",
            "Backend Systems",
            "WebSockets",
            "Redis",
            "Artificial Intelligence",
            "LLM Applications",
            "DevOps",
          ],
        }),
      }}
    />
    </>
  );
}
