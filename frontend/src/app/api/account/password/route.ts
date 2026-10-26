import { NextRequest, NextResponse } from "next/server";
import { isSameOrigin, callAsUser, clearAuthCookies } from "@/lib/auth/backend";
import { failure, forbiddenOrigin, readJson, relayBackendError, str, unavailable, validationFailure } from "@/lib/auth/route-helpers";
import { validatePasswordChange } from "@/lib/auth/validation";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const body = await readJson(request);
  const values = {
    currentPassword: str(body?.currentPassword),
    newPassword: str(body?.newPassword),
    confirmPassword: str(body?.confirmPassword),
  };
  const errors = validatePasswordChange(values);
  if (Object.keys(errors).length) return validationFailure(errors);

  try {
    const call = await callAsUser(request, "/users/me/password", {
      method: "POST",
      body: JSON.stringify({ currentPassword: values.currentPassword, newPassword: values.newPassword }),
    });
    if (!call) {
      const response = failure(401, "UNAUTHENTICATED");
      clearAuthCookies(response.cookies);
      return response;
    }
    if (!call.response.ok) return relayBackendError(call.response);

    // The API revoked every refresh token, so this browser must sign in again too.
    const response = NextResponse.json({ ok: true });
    clearAuthCookies(response.cookies);
    return response;
  } catch {
    return unavailable();
  }
}
