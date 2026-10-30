import { NextRequest, NextResponse } from "next/server";
import { isSameOrigin, callAsUser, withSessionCookies } from "@/lib/auth/backend";
import { failure, forbiddenOrigin, readJson, relayBackendError, unavailable } from "@/lib/auth/route-helpers";

type Props = { params: Promise<{ taskId: string }> };

export async function PATCH(request: NextRequest, { params }: Props) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const { taskId } = await params;
  const body = await readJson(request);

  try {
    const call = await callAsUser(request, `/paths/tasks/${taskId}`, {
      method: "PATCH",
      body: JSON.stringify(body),
    });
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    const data = await call.response.json();
    return withSessionCookies(NextResponse.json({ task: data }), call);
  } catch {
    return unavailable();
  }
}

