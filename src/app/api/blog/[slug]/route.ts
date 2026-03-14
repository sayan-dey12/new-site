import { BlogModel } from "@/models/Blog";
import { connectDB } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function GET(req: Request , {params}:{params:Promise<{slug: string}>}){
    try {
        await connectDB();
        const { slug } = await params;
        const blog = await BlogModel.findOneAndUpdate({slug} , {$inc: {views: 1}} , {new: true})
        if(!blog){
            return NextResponse.json({ 
                success: false,
                error: "Blog not found" },
                { status: 404 })
        }
        return NextResponse.json(
            {
                success: true,
                data: blog
            },
            {
                status: 200
            }
        )
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {
                success: false,
                error: "Error in finding the data"
            },
            {status: 500}
        )
    }
}


export async function PUT(req: Request , {params}:{params:Promise<{slug: string}>}){
    try {
        await connectDB();
        const { slug } = await params;
        const body = await req.json();
        const updatedBlog = await BlogModel.findOneAndUpdate(
            {slug},
            body,
            {new : true}
        )
        if(!updatedBlog){
            return NextResponse.json(
                {
                    success: false,
                    error: "Blog not found"
                },
                { status: 404 }
            );
        }
        return NextResponse.json(
            {
                success: true,
                data: updatedBlog
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to update blog"
            },
            { status: 500 }
        );
        
    }
}


export async function DELETE(req: Request,{ params }: { params: Promise<{ slug: string }> }) {
  
    try {
        await connectDB()

        const { slug } = await params;
        const deletedBlog = await BlogModel.findOneAndDelete({slug: slug});
        if (!deletedBlog) {
        return NextResponse.json(
            {
            success: false,
            error: "Blog not found",
            },
            { status: 404 }
        )
        }
        return NextResponse.json(
        {
            success: true,
            message: "Blog deleted successfully",
        },
        { status: 200 }
        )
  } catch (error) {
        console.error(error)
        return NextResponse.json(
        {
            success: false,
            error: "Failed to delete blog",
        },
        { status: 500 }
        )
    }
}