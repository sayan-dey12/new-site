import Link from "next/link";
import Image from "next/image";

export default function LatestPreview({latest}: {latest?: { title: string; slug: string; coverImage?: string };}){
    return(
        <>
        {latest && (
          <Link
            href={`/blog/${latest.slug}`}
            className="group flex items-center gap-3 justify-center mt-5 
                       bg-primary border border-border 
                       shadow-md hover:shadow-2xl rounded-full px-4 py-2 transition"
          >
            <Image
              src={latest.coverImage || "/images/fallback.png"}
              width={36}
              height={36}
              className="rounded-full object-cover"
              alt={latest.title}  
            />
            <div className="text-left">
              <p className="text-[13px] font-semibold text-primary-foreground leading-tight group-hover:underline">
                Latest: {latest.title}
              </p>
              <p className="text-[11px] text-secondary-foreground">
                Tap to read →
              </p>
            </div>
          </Link>
        )}
        </>
    )
}