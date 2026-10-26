export const ACCESS_COOKIE = "skillbridge_access";
export const REFRESH_COOKIE = "skillbridge_refresh";

/** Pages that require a signed-in user. Everything else is public. */
export const PROTECTED_PREFIXES = ["/account"];
/** Pages a signed-in user has no reason to see. */
export const GUEST_ONLY_PATHS = ["/login", "/register"];

export type SessionUser = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  bio?: string | null;
  role: "STUDENT" | "INSTRUCTOR" | "ADMIN";
  verified: boolean;
};

export type AuthPayload = {
  accessToken: string;
  refreshToken: string;
  /** Access-token lifetime in seconds. */
  expiresIn: number;
  user: SessionUser;
};
