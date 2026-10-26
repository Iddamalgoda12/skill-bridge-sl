"use client";
import { useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { ArrowRight, LoaderCircle } from "lucide-react";
import { ApiError, apiRequest } from "@/lib/api/client";
import { validateLogin, validateRegister, type FieldErrors } from "@/lib/auth/validation";
import { TextField } from "./TextField";
import { focusFirstInvalid, useFormErrors } from "./useFormErrors";

type Errors = FieldErrors<"firstName" | "lastName" | "email" | "password">;

export function AuthForm({ register = false, next = "/account", passwordChanged = false }: { register?: boolean; next?: string; passwordChanged?: boolean }) {
  const t = useTranslations(register ? "auth.register" : "auth.login");
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
      firstName: String(data.get("firstName") ?? ""),
      lastName: String(data.get("lastName") ?? ""),
      email: String(data.get("email") ?? ""),
      password: String(data.get("password") ?? ""),
    };

    const found: Errors = register ? validateRegister(values) : validateLogin(values);
    setFormError("");
    setErrors(found);
    if (Object.keys(found).length) {
      // Wait for aria-invalid to render before moving focus.
      requestAnimationFrame(() => focusFirstInvalid(formRef.current));
      return;
    }

    setPending(true);
    try {
      await apiRequest(`/api/auth/${register ? "register" : "login"}`, { method: "POST", body: JSON.stringify(values) });
      router.push(next);
      router.refresh();
    } catch (error) {
      if (error instanceof ApiError && error.violations) {
        setErrors(error.violations as Errors);
        requestAnimationFrame(() => focusFirstInvalid(formRef.current));
      } else if (error instanceof ApiError && error.code === "EMAIL_EXISTS") {
        setErrors({ email: undefined });
        setFormError(messages.api(error.code));
      } else {
        setFormError(messages.api(error instanceof ApiError ? error.code : "BAD_REQUEST"));
      }
    } finally {
      setPending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="auth-form glass-panel" aria-busy={pending}>
      <h1>{t("title")}</h1>
      <p className="muted">{t("subtitle")}</p>
      {passwordChanged && !register && <p className="notice" role="status">{t("passwordChanged")}</p>}
      {register && (
        <div className="grid-2">
          <TextField label={f("firstName")} name="firstName" autoComplete="given-name" required maxLength={100} error={messages.field(errors.firstName)} />
          <TextField label={f("lastName")} name="lastName" autoComplete="family-name" required maxLength={100} error={messages.field(errors.lastName)} />
        </div>
      )}
      <TextField label={f("email")} name="email" type="email" inputMode="email" autoComplete="email" required maxLength={254} error={messages.field(errors.email)} />
      <TextField
        label={f("password")}
        name="password"
        type="password"
        autoComplete={register ? "new-password" : "current-password"}
        required
        maxLength={128}
        hint={register ? f("passwordHint") : undefined}
        error={messages.field(errors.password)}
      />
      {formError && <p className="notice notice-error" role="alert">{formError}</p>}
      <button type="submit" className="glass-button button-dark" disabled={pending}>
        {pending ? <LoaderCircle size={18} className="loading-icon" aria-hidden="true" /> : null}
        {pending ? t("pending") : t("submit")}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
      <p className="auth-alternative">
        {t("alternative")} <Link href={register ? "/login" : "/register"}>{t("alternativeLink")}</Link>
      </p>
    </form>
  );
}
