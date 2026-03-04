import { Badge } from "@/components/ui/badge"
export default function HeroAI(){
    return(
        <section className="relative overflow-hidden rounded-xl 
                bg-linear-to-br 
                from-purple-500/20 via-blue-500/20 to-transparent
                dark:from-purple-600/15 dark:via-blue-600/15 dark:to-transparent
                p-8 sm:p-12 mb-8">
            <div className="relative max-w-3xl mx-auto text-center">
                <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    AI LAB</h1>
                <p
                className="text-sm sm:text-base text-secondary-foreground">
                     A playground where I explore AI systems , autonomous agents , and intelligent developer tools.
                </p>

                <div className="pt-5 flex justify-center gap-3 flex-wrap ">
                    <Badge className="bg-accent text-white">AI Agents</Badge>
                    <Badge className="bg-accent text-white">LLM Tools</Badge>
                    <Badge className="bg-accent text-white">Experiments</Badge>
                    <Badge className="bg-accent text-white">Research</Badge>
                </div>
            </div>
        </section>
    )
}