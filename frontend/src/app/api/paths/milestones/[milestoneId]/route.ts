import { NextRequest, NextResponse } from "next/server";
import { isSameOrigin, callAsUser, withSessionCookies } from "@/lib/auth/backend";
import { failure, forbiddenOrigin, readJson, relayBackendError, unavailable } from "@/lib/auth/route-helpers";

type Props = { params: Promise<{ milestoneId: string }> };

export async function PATCH(request: NextRequest, { params }: Props) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const { milestoneId } = await params;
  const body = await readJson(request);

  try {
    const call = await callAsUser(request, `/paths/milestones/${milestoneId}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    const data = await call.response.json();
    return withSessionCookies(NextResponse.json({ milestone: data }), call);
  } catch {
    return unavailable();
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const { milestoneId } = await params;

  try {
    const call = await callAsUser(request, `/paths/milestones/${milestoneId}`, {
      method: "DELETE",
    });
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    return withSessionCookies(NextResponse.json({ ok: true }), call);
  } catch {
    return unavailable();
  }
}

