import { NextRequest, NextResponse } from "next/server";
import { callAsUser, withSessionCookies } from "@/lib/auth/backend";

/**
 * Lets the browser ask "am I signed in?" without provoking a 401 (and a red console
 * error) on every anonymous page view. Always answers 200.
 */
export async function GET(request: NextRequest) {
  try {
    const call = await callAsUser(request, "/users/me");
    if (!call) return NextResponse.json({ authenticated: false }, { headers: { "Cache-Control": "no-store" } });
    return withSessionCookies(NextResponse.json({ authenticated: call.response.ok }, { headers: { "Cache-Control": "no-store" } }), call);
  } catch {
    return NextResponse.json({ authenticated: false }, { headers: { "Cache-Control": "no-store" } });
  }
}
