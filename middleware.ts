import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const authEmail = request.headers.get("x-user-email");

  // Only allow admin email
  if (request.nextUrl.pathname.startsWith("/api/admin")) {
    if (authEmail !== "akshaysuthar05@gmail.com") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  return NextResponse.next();
}

// Protect only /api/admin routes
export const config = {
  matcher: ["/api/admin/:path*"],
};
