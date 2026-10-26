"use client";
import { useTranslations } from "next-intl";

/** Maps stable validation / API error codes to the visitor's language. */
export function useFormErrors() {
  const t = useTranslations("errors");
  return {
    field: (code: string | undefined) => (code ? (t.has(`validation.${code}`) ? t(`validation.${code}`) : t("validation.invalid")) : undefined),
    api: (code: string) => (t.has(`api.${code}`) ? t(`api.${code}`) : t("api.BAD_REQUEST")),
  };
}

/** Focuses the first control flagged invalid so keyboard and screen-reader users land on the problem. */
export function focusFirstInvalid(form: HTMLFormElement | null) {
  form?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
}
