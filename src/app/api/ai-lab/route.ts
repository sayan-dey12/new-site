import { NextResponse , NextRequest } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import { AIElementModel } from "@/models/AiLab";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST( req: NextRequest){
    try {
        await connectDB();
        const body = await req.json();
        const aiElement = await AIElementModel.create({...body});
        return NextResponse.json({
            success: true,
            data: aiElement
            },
            {
                status: 201
            }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                success: false,
                error: "Failed to create the ai-experiment"
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
        const limit = Math.min(Number(limitParams) || 10, 50);
        const aiElement = await AIElementModel.find({})
            .sort({ createdAt: -1 })
            .limit(limit);
        return NextResponse.json({
            success: true,
            count: aiElement.length,
            data: aiElement,
        });     
    } catch (error) {
        console.log(error);
        return NextResponse.json(
        {
            success: false,
            error: "Failed to fetch projects",
        },
        { status: 500 }
        );
    }
}