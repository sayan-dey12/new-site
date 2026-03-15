import { AIElementModel } from "@/models/AiLab";
import { connectDB } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: Request , {params}:{params:Promise<{slug: string}>}){
    try {
        await connectDB();
        const { slug } = await params;
        const AIElement = await AIElementModel.findOneAndUpdate({slug} , {$inc: {views: 1}} , {new: true})
        if(!AIElement){
            return NextResponse.json({ 
                success: false,
                error: "AI Element not found" },
                { status: 404 })
        }
        return NextResponse.json(
            {
                success: true,
                data: AIElement
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
        const updatedAIElement = await AIElementModel.findOneAndUpdate(
            {slug},
            body,
            {new : true}
        )
        if(!updatedAIElement){
            return NextResponse.json(
                {
                    success: false,
                    error: "AI Element not found"
                },
                { status: 404 }
            );
        }
        return NextResponse.json(
            {
                success: true,
                data: updatedAIElement
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to update AI Element"
            },
            { status: 500 }
        );
        
    }
}


export async function DELETE(req: Request,{ params }: { params: Promise<{ slug: string }> }) {
  
    try {
        await connectDB()

        const { slug } = await params;
        const deletedAIElement = await AIElementModel.findOneAndDelete({slug: slug});
        if (!deletedAIElement) {
        return NextResponse.json(
            {
            success: false,
            error: "AI Element not found",
            },
            { status: 404 }
        )
        }
        return NextResponse.json(
        {
            success: true,
            message: "AI Element deleted successfully",
        },
        { status: 200 }
        )
  } catch (error) {
        console.error(error)
        return NextResponse.json(
        {
            success: false,
            error: "Failed to delete AI Element",
        },
        { status: 500 }
        )
    }
}