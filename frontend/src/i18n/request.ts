import { cookies, headers } from "next/headers";
import { getRequestConfig } from "next-intl/server";
import { LOCALE_COOKIE, isLocale, negotiateLocale } from "./config";

/** Locale precedence: explicit choice (cookie) → browser language → default. */
export default getRequestConfig(async () => {
  const stored = (await cookies()).get(LOCALE_COOKIE)?.value;
  const locale = isLocale(stored)
    ? stored
    : negotiateLocale((await headers()).get("accept-language"));

  return {
    locale,
    // Fixed zone so server and client format dates identically (no hydration drift).
    timeZone: "Asia/Colombo",
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
