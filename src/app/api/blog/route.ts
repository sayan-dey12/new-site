import { NextResponse , NextRequest } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import { BlogModel } from "@/models/Blog";

export async function POST( req: NextRequest){
    try {
        await connectDB();
        const body = await req.json();
        const blog = await BlogModel.create(body);
        return NextResponse.json({
            success: true,
            data: blog
            },
            {
                status: 201
            }
        );
    } catch (error) {
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
        const limit = Math.min(parseInt(limitParams || "10"), 50);
        const blogs = await BlogModel.find({ published: true })
            .sort({ createdAt: -1 })
            .limit(limit);
        return NextResponse.json({
        success: true,
        count: blogs.length,
        data: blogs,
        });     
    } catch (error) {
        return NextResponse.json(
        {
            success: false,
            error: "Failed to fetch blogs",
        },
        { status: 500 }
        );
    }
}