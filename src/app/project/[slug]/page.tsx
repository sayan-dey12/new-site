import { isAdmin } from "@/lib/auth"
import { notFound } from "next/navigation"
import { getProject } from "@/lib/project"
import AuthorSidebar from "@/components/blog/AuthorSidebar"
import ProjectMeta from "@/components/projects/ProjectMeta"
import ProjectAdminSection from "@/components/projects/ProjectAdminSection"
import ProjectContent from "@/components/projects/ProjectContent"
import ProjectMediaSection from "@/components/projects/ProjectMediaSection"
import ProjectLinksSection from "@/components/projects/ProjectLinkSection"
import ProjectCoverExpert from "@/components/projects/ProjectCoverExcerpt"
import { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const { slug } = await params
  const project = await getProject(slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

  const url = `${baseUrl}/projects/${project.slug}`

  return {
    metadataBase: new URL(baseUrl),

    title: `${project.title} | Sayan Builds`,
    description: project.excerpt || "Explore this project built by Sayan",

    keywords: project.tags?.join(", "),

    authors: [{ name: "Sayan Dey" }],

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title: project.title,
      description: project.excerpt,
      url,
      siteName: "Sayan Builds",
      images: [
        {
          url: project.coverImage?.startsWith("http")
              ? project.coverImage
              : `${baseUrl}${project.coverImage || "/default.jpg"}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website", // for projects
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.excerpt,
      images: [project.coverImage || "/default.jpg"],
    },

    alternates: {
      canonical: url,
    },
  }
}

export default async function ProjectPage({params}:{params:Promise<{slug:string}>}) {
    const { slug } = await params
    const project = await getProject(slug)
    if (!project) return notFound()
    const admin = await isAdmin()
  const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  const url = `${baseUrl}/projects/${project.slug}`

    return(
        <div className="max-w-7xl mx-auto px-2 py-10 grid grid-cols-1 lg:grid-cols-5 gap-5">
        
              <div className="hidden lg:block"></div>
        
              <article className="lg:col-span-3">
        
                <h1 className="text-4xl font-bold mb-4 text-center">
                  {project.title}
                </h1>
        
                <ProjectMeta project={project} />
        
                {/* ADMIN SECTION */}
                {admin && (
                  <ProjectAdminSection project={project} />
                )}

                <ProjectCoverExpert project={project}/>

                <ProjectLinksSection project={project}/>

                <ProjectMediaSection project={project}/>
        
                <ProjectContent project={project} />

                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                      "@context": "https://schema.org",
                      "@type": "SoftwareApplication",

                      name: project.title,
                      description: project.excerpt,
                      image: project.coverImage || `${baseUrl}/default.jpg`,

                      author: {
                        "@type": "Person",
                        name: "Sayan Dey",
                      },

                      publisher: {
                        "@type": "Organization",
                        name: "Sayan Builds",
                      },

                      applicationCategory: "DeveloperApplication",
                      applicationSubCategory: project.category || "Web Development",

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
                        project.github || "",
                        project.demo || "",
                      ].filter(Boolean),

                      keywords: project.tags?.join(", "),

                      datePublished: project.createdAt
                        ? new Date(project.createdAt).toISOString()
                        : undefined,

                      dateModified: project.updatedAt
                        ? new Date(project.updatedAt).toISOString()
                        : undefined,

                      interactionStatistic: {
                        "@type": "InteractionCounter",
                        interactionType: "https://schema.org/WatchAction",
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