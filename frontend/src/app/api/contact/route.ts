import { NextRequest, NextResponse } from "next/server";
import { backendFetch, clientAddressHeaders, isSameOrigin } from "@/lib/auth/backend";
import { forbiddenOrigin, readJson, relayBackendError, str, unavailable, validationFailure } from "@/lib/auth/route-helpers";
import { validateContact } from "@/lib/auth/validation";

export async function POST(request: NextRequest) {
  if (!isSameOrigin(request)) return forbiddenOrigin();
  const body = await readJson(request);
  const values = { name: str(body?.name), email: str(body?.email), topic: str(body?.topic), message: str(body?.message) };
  const errors = validateContact(values);
  if (Object.keys(errors).length) return validationFailure(errors);

  try {
    const upstream = await backendFetch("/contact", { method: "POST", body: JSON.stringify(values), headers: clientAddressHeaders(request) });
    if (!upstream.ok) return relayBackendError(upstream);
    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return unavailable();
  }
}
