import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function POST(req: Request) {

  const { email, password } = await req.json()

  if (email !== process.env.ADMIN_EMAIL) {
    return NextResponse.json({ success: false })
  }

  const valid = await bcrypt.compare(
    password,
    process.env.ADMIN_PASSWORD_HASH!
  )

  if (!valid) {
    return NextResponse.json({ success: false })
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET!,
    { expiresIn: "2d" }
  );
  
  (await cookies()).set("admin-token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  })

  return NextResponse.json({ success: true })
}