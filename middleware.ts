import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Handle base /admin route: send unauthenticated users to login; allow authenticated users through
  if (request.nextUrl.pathname === "/admin" || request.nextUrl.pathname === "/admin/") {
    const baseAuthCookie = request.cookies.get("admin-auth")
    if (!baseAuthCookie || baseAuthCookie.value !== "true") {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
    return NextResponse.next()
  }

  if (request.nextUrl.pathname.startsWith("/admin") && !request.nextUrl.pathname.startsWith("/admin/login")) {
    const authCookie = request.cookies.get("admin-auth")
    if (!authCookie || authCookie.value !== "true") {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: "/admin/:path*",
}

