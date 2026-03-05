import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

export function proxy(req:NextRequest) {

    const { pathname } = req.nextUrl

   if (pathname.startsWith("/admin/login")) {
    return NextResponse.next()
  }

 const token = req.cookies.get("admin-token")?.value

 if(!token){
   return NextResponse.redirect(new URL("/admin/login", req.url))
 }

 try{
   jwt.verify(token, process.env.JWT_SECRET!)
   return NextResponse.next()
 } catch {
   return NextResponse.redirect(new URL("/admin/login", req.url))
 }

}

export const config = {
 matcher: ["/admin/:path*"]
}