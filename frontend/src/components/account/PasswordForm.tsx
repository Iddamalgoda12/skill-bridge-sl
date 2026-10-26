"use client";
import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { KeyRound, LoaderCircle } from "lucide-react";
import { ApiError, apiRequest } from "@/lib/api/client";
import { validatePasswordChange, type FieldErrors } from "@/lib/auth/validation";
import { TextField } from "@/components/forms/TextField";
import { focusFirstInvalid, useFormErrors } from "@/components/forms/useFormErrors";

type Errors = FieldErrors<"currentPassword" | "newPassword" | "confirmPassword">;

export function PasswordForm() {
  const t = useTranslations("account.password");
  const f = useTranslations("auth.fields");
  const messages = useFormErrors();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [formError, setFormError] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      currentPassword: String(data.get("currentPassword") ?? ""),
      newPassword: String(data.get("newPassword") ?? ""),
      confirmPassword: String(data.get("confirmPassword") ?? ""),
    };
    const found = validatePasswordChange(values);
    setFormError("");
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => focusFirstInvalid(formRef.current));
      return;
    }

    setPending(true);
    try {
      await apiRequest("/api/account/password", { method: "POST", body: JSON.stringify(values) });
      // Every session was revoked, including this one: sign in again with the new password.
      router.push("/login?changed=1");
      router.refresh();
    } catch (error) {
      if (error instanceof ApiError && error.violations) {
        setErrors(error.violations as Errors);
        requestAnimationFrame(() => focusFirstInvalid(formRef.current));
      } else {
        setFormError(messages.api(error instanceof ApiError ? error.code : "BAD_REQUEST"));
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="glass-panel account-card" aria-busy={pending}>
      <h2>{t("heading")}</h2>
      <p className="muted">{t("description")}</p>
      <TextField label={t("current")} name="currentPassword" type="password" autoComplete="current-password" required maxLength={128} error={messages.field(errors.currentPassword)} />
      <TextField label={t("new")} name="newPassword" type="password" autoComplete="new-password" required maxLength={128} hint={f("passwordHint")} error={messages.field(errors.newPassword)} />
      <TextField label={t("confirm")} name="confirmPassword" type="password" autoComplete="new-password" required maxLength={128} error={messages.field(errors.confirmPassword)} />
      {formError && <p className="notice notice-error" role="alert">{formError}</p>}
      <button type="submit" className="glass-button" disabled={pending}>
        {pending ? <LoaderCircle size={17} className="loading-icon" aria-hidden="true" /> : <KeyRound size={17} aria-hidden="true" />}
        {pending ? t("saving") : t("submit")}
      </button>
    </form>
  );
}
