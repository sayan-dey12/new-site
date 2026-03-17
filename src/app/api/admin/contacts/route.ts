import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Contact from "@/models/contact";

export async function GET() {
  try {
    await connectDB();

    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}