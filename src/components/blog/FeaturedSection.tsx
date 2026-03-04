import FeaturedBlog from "./FeaturedBlog";
import AuthorSidebar from "./AuthorSidebar";
import { BlogType } from "@/types/blog";

export default function FeaturedSection({blog}:{blog:BlogType & {authorName:string}}){
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
