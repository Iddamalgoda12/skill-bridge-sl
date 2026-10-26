import { NextRequest, NextResponse } from "next/server";
import { REFRESH_COOKIE } from "@/lib/auth/constants";
import { backendFetch, clearAuthCookies, isSameOrigin } from "@/lib/auth/backend";
import { forbiddenOrigin } from "@/lib/auth/route-helpers";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const refreshToken = request.cookies.get(REFRESH_COOKIE)?.value;

  // Revoke server-side so a copied cookie cannot be replayed. If the API is
  // unreachable the browser is still signed out locally.
  if (refreshToken) {
    await backendFetch("/auth/logout", { method: "POST", body: JSON.stringify({ refreshToken }) }).catch(() => null);
  }
  const response = NextResponse.json({ ok: true });
  clearAuthCookies(response.cookies);
  return response;
}
