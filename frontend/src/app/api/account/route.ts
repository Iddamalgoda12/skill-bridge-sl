import { NextRequest, NextResponse } from "next/server";
import { isSameOrigin, callAsUser, withSessionCookies } from "@/lib/auth/backend";
import { failure, forbiddenOrigin, readJson, relayBackendError, str, unavailable, validationFailure } from "@/lib/auth/route-helpers";
import { validateProfile } from "@/lib/auth/validation";

export async function PATCH(request: NextRequest) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const body = await readJson(request);
  const values = { firstName: str(body?.firstName), lastName: str(body?.lastName), bio: str(body?.bio) };
  const errors = validateProfile(values);
  if (Object.keys(errors).length) return validationFailure(errors);

  try {
    const call = await callAsUser(request, "/users/me", { method: "PATCH", body: JSON.stringify(values) });
    if (!call) return withSessionCookies(failure(401, "UNAUTHENTICATED"), null);
    if (!call.response.ok) return withSessionCookies(await relayBackendError(call.response), call);
    return withSessionCookies(NextResponse.json({ user: await call.response.json() }), call);
  } catch {
    return unavailable();
  }
}
