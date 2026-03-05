import { BlogType } from "@/types/blog"
import BlogRow from "./BlogRow"

interface Props {
  blogs: BlogType[]
}

export default function BlogTable({ blogs }: Props) {
  return (
    <div className="border rounded-xl overflow-hidden">

      <table className="w-full text-sm">

        {/* Head */}
        <thead className="bg-muted border-b">
          <tr className="text-left">

            <th className="p-4">Blog</th>
            <th>Tags</th>
            <th>Author</th>
            <th>Date</th>
            <th>Status</th>
            <th className="text-right pr-6">Actions</th>

          </tr>
        </thead>

        {/* Body */}
        <tbody>

          {blogs.map((blog) => (
            <BlogRow key={blog._id} blog={blog} />
          ))}

        </tbody>

      </table>

    </div>
  )
}