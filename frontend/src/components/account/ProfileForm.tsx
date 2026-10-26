"use client";
import { useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { LoaderCircle, Save } from "lucide-react";
import { ApiError, apiRequest } from "@/lib/api/client";
import { validateProfile, type FieldErrors } from "@/lib/auth/validation";
import type { SessionUser } from "@/lib/auth/constants";
import { TextField } from "@/components/forms/TextField";
import { focusFirstInvalid, useFormErrors } from "@/components/forms/useFormErrors";

type Errors = FieldErrors<"firstName" | "lastName" | "bio">;

export function ProfileForm({ user }: { user: SessionUser }) {
  const t = useTranslations("account.profile");
  const messages = useFormErrors();
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ kind: "success" | "error"; text: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const values = {
      firstName: String(data.get("firstName") ?? ""),
      lastName: String(data.get("lastName") ?? ""),
      bio: String(data.get("bio") ?? ""),
    };
    const found = validateProfile(values);
    setStatus(null);
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => focusFirstInvalid(formRef.current));
      return;
    }

    setPending(true);
    try {
      await apiRequest("/api/account", { method: "PATCH", body: JSON.stringify(values) });
      setStatus({ kind: "success", text: t("saved") });
      router.refresh();
    } catch (error) {
      if (error instanceof ApiError && error.status === 401) {
        router.push("/login?next=/account");
        return;
      }
      if (error instanceof ApiError && error.violations) setErrors(error.violations as Errors);
      setStatus({ kind: "error", text: messages.api(error instanceof ApiError ? error.code : "BAD_REQUEST") });
    } finally {
      setPending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="glass-panel account-card" aria-busy={pending}>
      <h2>{t("heading")}</h2>
      <p className="muted">{t("description")}</p>
      <div className="grid-2">
        <TextField label={t("firstName")} name="firstName" defaultValue={user.firstName} autoComplete="given-name" required maxLength={100} error={messages.field(errors.firstName)} />
        <TextField label={t("lastName")} name="lastName" defaultValue={user.lastName} autoComplete="family-name" required maxLength={100} error={messages.field(errors.lastName)} />
      </div>
      <TextField label={t("email")} name="email" type="email" value={user.email} readOnly hint={t("emailNote")} />
      <TextField as="textarea" label={t("bio")} name="bio" defaultValue={user.bio ?? ""} rows={4} maxLength={500} hint={t("bioHint")} error={messages.field(errors.bio)} />
      <button type="submit" className="glass-button button-dark" disabled={pending}>
        {pending ? <LoaderCircle size={17} className="loading-icon" aria-hidden="true" /> : <Save size={17} aria-hidden="true" />}
        {pending ? t("saving") : t("save")}
      </button>
      <p className={status?.kind === "error" ? "notice notice-error" : "status-message"} role={status?.kind === "error" ? "alert" : "status"}>{status?.text}</p>
    </form>
  );
}
