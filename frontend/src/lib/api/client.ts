export class ApiError extends Error {
  constructor(message: string, public status: number) { super(message); this.name = "ApiError"; }
}
/** Browser requests use the same-origin Next.js /api proxy. */
export async function apiRequest<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(path, { ...options, headers: { "Content-Type": "application/json", ...options.headers } });
  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new ApiError(body?.message || "We couldn’t complete that request. Please try again.", response.status);
  }
  return response.status === 204 ? undefined as T : response.json();
}
