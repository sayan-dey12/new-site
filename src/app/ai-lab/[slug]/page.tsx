import { isAdmin } from "@/lib/auth"
import { notFound } from "next/navigation"
import { getAI } from "@/lib/ai-lab"
import AuthorSidebar from "@/components/blog/AuthorSidebar"
import AIProjectMeta from "@/components/ai-lab/AIProjectMeta"
import AIProjectCoverExpert from "@/components/ai-lab/AIProjectCoverExcerpt"
import AIProjectLinksSection from "@/components/ai-lab/AIProjectLinkSection"
import AIProjectMediaSection from "@/components/ai-lab/AIProjectMediaSection"
import AIProjectContent from "@/components/ai-lab/AIProjectContent"
import AIProjectAdminSection from "@/components/ai-lab/AIProjectAdminSection"
import { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const { slug } = await params
  const aiElement = await getAI(slug)

  if (!aiElement) {
    return {
      title: "AI Tool Not Found",
    }
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  const url = `${baseUrl}/ai-lab/${aiElement.slug}`

  const image =
    aiElement.coverImage?.startsWith("http")
      ? aiElement.coverImage
      : `${baseUrl}${aiElement.coverImage || "/default.jpg"}`

  return {
    metadataBase: new URL(baseUrl),

    title: `${aiElement.title} | AI Tool | Sayan Builds`,
    
    description:
      aiElement.excerpt ||
      `Try ${aiElement.title}, an AI-powered tool built by Sayan.`,

    keywords: aiElement.tags?.join(", "),

    authors: [{ name: "Sayan Dey" }],

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: aiElement.title,
      description: aiElement.excerpt,
      url,
      siteName: "Sayan Builds",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: aiElement.title,
      description: aiElement.excerpt,
      images: [image],
    },

    alternates: {
      canonical: url,
    },
  }
}

export default async function AIElementPage({params}:{params:Promise<{slug:string}>}) {
    const { slug } = await params
    const aiElement = await getAI(slug)
    if (!aiElement) return notFound()
    const admin = await isAdmin()

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    const url = `${baseUrl}/ai-lab/${aiElement.slug}`

    return(
        <div className="max-w-7xl mx-auto px-2 py-10 grid grid-cols-1 lg:grid-cols-5 gap-5">
        
              <div className="hidden lg:block"></div>
        
              <article className="lg:col-span-3">
        
                <h1 className="text-4xl font-bold mb-4 text-center">
                  {aiElement.title}
                </h1>
        
                <AIProjectMeta AIElement={aiElement}/>     

                {/* ADMIN SECTION */}
                {admin && (
                  <AIProjectAdminSection aiElement={aiElement}/>
                )}

                <AIProjectCoverExpert aiElement={aiElement}/>

                <AIProjectLinksSection aiElement={aiElement}/>

                <AIProjectMediaSection aiElement={aiElement}/>
        
                <AIProjectContent aiElement={aiElement}/>

                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "WebApplication",

                      name: aiElement.title,
                      description: aiElement.excerpt,
                      image: aiElement.coverImage || `${baseUrl}/default.jpg`,

                      author: {
                        "@type": "Person",
                        name: "Sayan Dey",
                      },

                      publisher: {
                        "@type": "Organization",
                        name: "Sayan Builds",
                      },

                      applicationCategory: "AIApplication",
                      applicationSubCategory: aiElement.category || "Artificial Intelligence",

                      operatingSystem: "Web",

                      url: url,
                      mainEntityOfPage: url,

                      inLanguage: "en",

                      offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "USD",
                      },

                      sameAs: [
                        aiElement.github || "",
                        aiElement.demo || "",
                      ].filter(Boolean),

                      keywords: aiElement.tags?.join(", "),

                      datePublished: aiElement.createdAt
                        ? new Date(aiElement.createdAt).toISOString()
                        : undefined,

                      dateModified: aiElement.updatedAt
                        ? new Date(aiElement.updatedAt).toISOString()
                        : undefined,

                      interactionStatistic: {
                        "@type": "InteractionCounter",
                        interactionType: "https://schema.org/UseAction",
                      },
                    }),
                  }}
                />
                

              </article>
        
              <aside className="lg:col-span-1 order-last lg:order-0">
        
                <div className="lg:sticky lg:top-24">
                  <AuthorSidebar />
                </div>
        
              </aside>
        
            </div>
    )
}