import FeaturedBlog from "./FeaturedBlog";
import AuthorSidebar from "./AuthorSidebar";
import { BlogType } from "@/types/blog";

type Props = {
  blog?: BlogType & { authorName?: string }
}

export default function FeaturedSection({blog}:Props){
    // console.log("featured blog inside of FS: ", blog);

     if (!blog || !blog._id) {
        return (
            
        <section className="max-w-6xl mx-auto px-4 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

            <div className="lg:col-span-2">
                <p className="text-muted-foreground text-3xl">
                No featured article yet.
                </p>
            </div>

            <div>
                <AuthorSidebar/>
            </div>

            </div>
        </section>
        );
    }
        
    
    return(
        <section className="max-w-6xl mx-auto px-4 mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-2">
                    <FeaturedBlog blog={blog}/>
                </div>
                <div>
                    <AuthorSidebar/>
                </div>

            </div>

        </section>
    )
}
