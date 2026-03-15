import { NextResponse , NextRequest } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import { BlogModel } from "@/models/Blog";
import { calculateReadingTime } from "@/lib/ReadingTime";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST( req: NextRequest){
    try {
        await connectDB();
        const body = await req.json();
        const readingTime = calculateReadingTime(body.content)
        const blog = await BlogModel.create({...body, readingTime});
        return NextResponse.json({
            success: true,
            data: blog
            },
            {
                status: 201
            }
        );
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to create blog"
            },
            {
                status: 500
            }
        );
    }
}

export async function GET( req: NextRequest){
    try {
        await connectDB()

        const limitParams = req.nextUrl.searchParams.get("limit");
        const showAll = req.nextUrl.searchParams.get("all");
        const limit = Math.min(parseInt(limitParams || "50"), 50);

        const filter = showAll === "true" ? {} : { published: true }

        const blogs = await BlogModel.find(filter)
            .sort({ createdAt: -1 })
            .limit(limit);
        return NextResponse.json({
        success: true,
        count: blogs.length,
        data: blogs,
        });     
    } catch (error) {
        console.error(error)
        return NextResponse.json(
        {
            success: false,
            error: "Failed to fetch blogs",
        },
        { status: 500 }
        );
    }
}