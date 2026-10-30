import { NextRequest, NextResponse } from "next/server";
import { isSameOrigin, callAsUser, withSessionCookies } from "@/lib/auth/backend";
import { failure, forbiddenOrigin, readJson, relayBackendError, unavailable } from "@/lib/auth/route-helpers";

type Props = { params: Promise<{ id: string }> };

export async function POST(request: NextRequest, { params }: Props) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const { id } = await params;
  const body = await readJson(request);

  try {
    const call = await callAsUser(request, `/paths/${id}/milestones`, {
      method: "POST",
      body: JSON.stringify(body),
    });
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    const data = await call.response.json();
    return withSessionCookies(NextResponse.json({ milestone: data }, { status: 201 }), call);
  } catch {
    return unavailable();
  }
}

