import { NextRequest, NextResponse } from "next/server";
import { isSameOrigin, callAsUser, withSessionCookies } from "@/lib/auth/backend";
import { failure, forbiddenOrigin, readJson, relayBackendError, unavailable } from "@/lib/auth/route-helpers";

type Props = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  try {
    const call = await callAsUser(request, `/paths/${id}`);
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    const data = await call.response.json();
    return withSessionCookies(NextResponse.json({ path: data }), call);
  } catch {
    return unavailable();
  }
}

export async function PATCH(request: NextRequest, { params }: Props) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const { id } = await params;
  const body = await readJson(request);

  try {
    const call = await callAsUser(request, `/paths/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    const data = await call.response.json();
    return withSessionCookies(NextResponse.json({ path: data }), call);
  } catch {
    return unavailable();
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const { id } = await params;

  try {
    const call = await callAsUser(request, `/paths/${id}`, {
      method: "DELETE",
    });
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    return withSessionCookies(NextResponse.json({ ok: true }), call);
  } catch {
    return unavailable();
  }
}

