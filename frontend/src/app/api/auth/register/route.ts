import { NextRequest, NextResponse } from "next/server";
import { backendFetch, clientAddressHeaders, isSameOrigin, setAuthCookies } from "@/lib/auth/backend";
import { forbiddenOrigin, readJson, relayBackendError, str, unavailable, validationFailure } from "@/lib/auth/route-helpers";
import { validateRegister } from "@/lib/auth/validation";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const body = await readJson(request);
  const values = {
    firstName: str(body?.firstName),
    lastName: str(body?.lastName),
    email: str(body?.email),
    password: str(body?.password),
  };
  const errors = validateRegister(values);
  if (Object.keys(errors).length) return validationFailure(errors);

  try {
    const upstream = await backendFetch("/auth/register", { method: "POST", body: JSON.stringify(values), headers: clientAddressHeaders(request) });
    if (!upstream.ok) return relayBackendError(upstream);
    const data = await upstream.json();
    const response = NextResponse.json({ user: data.user }, { status: 201 });
    setAuthCookies(response.cookies, data);
    return response;
  } catch {
    return unavailable();
  }
}
