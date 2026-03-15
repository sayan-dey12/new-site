import { NextResponse , NextRequest } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import { ProjectModel } from "@/models/Project";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST( req: NextRequest){
    try {
        await connectDB();
        const body = await req.json();
        const project = await ProjectModel.create({...body});
        return NextResponse.json({
            success: true,
            data: project
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
                error: "Failed to create a project"
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
        const limit = Math.min(parseInt(limitParams || "50"), 50);
        const projects = await ProjectModel.find({ published: true })
            .sort({ createdAt: -1 })
            .limit(limit);
        return NextResponse.json({
            success: true,
            count: projects.length,
            data: projects,
        });     
    } catch (error) {
        console.error(error)
        return NextResponse.json(
        {
            success: false,
            error: "Failed to fetch projects",
        },
        { status: 500 }
        );
    }
}