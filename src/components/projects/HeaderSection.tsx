
export default function HeroProjects(){
    return(
        <section className="relative overflow-hidden rounded-xl
                bg-primary 
                bg-linear-to-br 
                from-purple-500/20 via-blue-500/20 to-transparent
                dark:from-purple-600/15 dark:via-blue-600/15 dark:to-transparent
                p-8 sm:p-12 mb-8">
            <div className="relative max-w-3xl mx-auto text-center">
                <h1
                    className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                    Projects</h1>
                <p
                className="text-sm sm:text-base text-secondary-foreground">
                    A collection of projects where I explore scalable backend systems , real-time applications , AI tools , and modern full-stack development.
                </p>
            </div>
        </section>
    )
}