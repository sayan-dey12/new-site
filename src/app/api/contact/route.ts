import { NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import Contact from "@/models/contact";
import { rateLimit } from "@/lib/rateLimiter";

export async function POST(req: Request) {
  try {
    const { email , source} = await req.json();

    // ✅ Email Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email" },
        { status: 400 }
      );
    }

    // ✅ Get IP & User Agent
    const ip =
      req.headers.get("x-forwarded-for") ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const userAgent = req.headers.get("user-agent") || "unknown";

    // ✅ Rate Limit Check
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Try later." },
        { status: 429 }
      );
    }

    await connectDB();

    // ✅ Prevent duplicates
    const exists = await Contact.findOne({ email });
    if (exists) {
      return NextResponse.json(
        { success: false, message: "Email already submitted" },
        { status: 409 }
      );
    }

    await Contact.create({
      email,
      source: source || "unknown",
      ip,
      userAgent,
    });

    return NextResponse.json({
      success: true,
      message: "Saved successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}