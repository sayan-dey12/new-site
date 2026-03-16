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


export default async function AIElementPage({params}:{params:Promise<{slug:string}>}) {
    const { slug } = await params
    const aiElement = await getAI(slug)
    if (!aiElement) return notFound()
    const admin = await isAdmin()

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
                

              </article>
        
              <aside className="lg:col-span-1 order-last lg:order-0">
        
                <div className="lg:sticky lg:top-24">
                  <AuthorSidebar />
                </div>
        
              </aside>
        
            </div>
    )
}