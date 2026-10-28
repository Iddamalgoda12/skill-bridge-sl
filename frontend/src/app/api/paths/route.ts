import { NextRequest, NextResponse } from "next/server";
import { isSameOrigin, callAsUser, withSessionCookies } from "@/lib/auth/backend";
import { failure, forbiddenOrigin, readJson, relayBackendError, unavailable } from "@/lib/auth/route-helpers";

export async function GET(request: NextRequest) {
  try {
    const call = await callAsUser(request, "/paths");
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    const data = await call.response.json();
    return withSessionCookies(NextResponse.json({ paths: data }), call);
  } catch {
    return unavailable();
  }
}

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const body = await readJson(request);

  try {
    const call = await callAsUser(request, "/paths", {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    const data = await call.response.json();
    return withSessionCookies(NextResponse.json({ path: data }, { status: 201 }), call);
  } catch {
    return unavailable();
  }
}

