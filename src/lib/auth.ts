import jwt from "jsonwebtoken"
import { cookies } from "next/headers"

export async function isAdmin(): Promise<boolean> {
  try {

    const cookieStore = await cookies()
    const token = cookieStore.get("admin-token")?.value

    if (!token) return false

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as { role: string }

    return decoded.role === "admin"

  } catch (error) {
    return false
  }
}