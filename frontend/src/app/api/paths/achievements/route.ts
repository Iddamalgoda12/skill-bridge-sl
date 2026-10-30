import { NextRequest, NextResponse } from "next/server";
import { callAsUser, withSessionCookies } from "@/lib/auth/backend";
import { failure, relayBackendError, unavailable } from "@/lib/auth/route-helpers";

export async function GET(request: NextRequest) {
  try {
    const call = await callAsUser(request, "/paths/achievements");
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    const data = await call.response.json();
    return withSessionCookies(NextResponse.json({ achievements: data }), call);
  } catch {
    return unavailable();
  }
}

