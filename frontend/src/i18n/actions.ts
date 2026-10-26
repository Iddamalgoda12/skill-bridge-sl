"use server";

import { cookies } from "next/headers";
import { LOCALE_COOKIE, isLocale } from "./config";

/** Persists the visitor's language; Next re-renders the current route with the new cookie. */
export async function setLocale(locale: string) {
  if (!isLocale(locale)) return;
  (await cookies()).set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}
