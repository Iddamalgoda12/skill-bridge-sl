export type ApiErrorBody = { code?: string; violations?: Record<string, string> };

export class ApiError extends Error {
  constructor(
    /** Stable machine code from the API (translated by the UI). */
    public code: string,
    public status: number,
    public violations?: Record<string, string>,
  ) {
    super(code);
    this.name = "ApiError";
  }
}

/**
 * Browser → Next.js route handler call. Failures become `ApiError`s carrying
 * stable codes; user-facing text is chosen by the caller from translations.
 */
export async function apiRequest<T = unknown>(path: string, options: RequestInit = {}): Promise<T> {
  let response: Response;
  try {
    response = await fetch(path, { ...options, headers: { "Content-Type": "application/json", ...options.headers } });
  } catch {
    throw new ApiError("NETWORK", 0);
  }
  if (!response.ok) {
    const body: ApiErrorBody | null = await response.json().catch(() => null);
    throw new ApiError(body?.code ?? "BAD_REQUEST", response.status, body?.violations);
  }
  return (response.status === 204 ? undefined : await response.json().catch(() => undefined)) as T;
}
