import LatestPreview from "./LatestPreview";

export default async function HeroBlogs(){

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog?limit=1`, {
    cache: "no-store"
  });

  const result = await res.json();
  const blogs = result.data;


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
                    Discover insights in Web Development, AI & Engineering</h1>
                <p
                className="text-sm sm:text-base text-secondary-foreground">Tutorials, deep dives, and practical engineering content crafted for builders.</p>
                <LatestPreview latest={blogs[0]}/>
            </div>
        </section>
    )
}