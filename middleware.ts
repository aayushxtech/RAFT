import { type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Only protect these routes that require authentication
    "/dashboard/:path*",
    "/profile/:path*",
    "/resources/:path*",
    "/community/:path*",
    "/settings/:path*",
    "/admin/:path*",
  ],
};
