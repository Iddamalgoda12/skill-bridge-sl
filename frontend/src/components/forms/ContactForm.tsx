"use client";
import { useRef, useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";
import { LoaderCircle, Send } from "lucide-react";
import { ApiError, apiRequest } from "@/lib/api/client";
import { validateContact, type FieldErrors } from "@/lib/auth/validation";
import { TextField } from "./TextField";
import { focusFirstInvalid, useFormErrors } from "./useFormErrors";

type Errors = FieldErrors<"name" | "email" | "topic" | "message">;
const topics = ["guidance", "scholarships", "feedback"] as const;

export function ContactForm({ topic = "guidance" }: { topic?: string }) {
  const t = useTranslations("contact.form");
  const messages = useFormErrors();
  const formRef = useRef<HTMLFormElement>(null);
  const [pending, setPending] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<{ kind: "success" | "error"; text: string } | null>(null);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      topic: String(data.get("topic") ?? ""),
      message: String(data.get("message") ?? ""),
    };
    const found = validateContact(values);
    setStatus(null);
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => focusFirstInvalid(formRef.current));
      return;
    }

    setPending(true);
    try {
      await apiRequest("/api/contact", { method: "POST", body: JSON.stringify(values) });
      setStatus({ kind: "success", text: t("success") });
      form.reset();
    } catch (error) {
      if (error instanceof ApiError && error.violations) setErrors(error.violations as Errors);
      setStatus({ kind: "error", text: messages.api(error instanceof ApiError ? error.code : "BAD_REQUEST") });
    } finally {
      setPending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="contact-form glass-panel" aria-busy={pending}>
      <h2>{t("heading")}</h2>
      <div className="grid-2">
        <TextField label={t("name")} name="name" required maxLength={150} autoComplete="name" error={messages.field(errors.name)} />
        <TextField label={t("email")} name="email" type="email" inputMode="email" required maxLength={254} autoComplete="email" error={messages.field(errors.email)} />
      </div>
      <TextField as="select" label={t("topic")} name="topic" defaultValue={topic} error={messages.field(errors.topic)}>
        {topics.map((value) => <option key={value} value={value}>{t(`topics.${value}`)}</option>)}
      </TextField>
      <TextField as="textarea" label={t("message")} name="message" rows={6} required minLength={10} maxLength={4000} error={messages.field(errors.message)} />
      <button type="submit" className="glass-button button-dark" disabled={pending}>
        {pending ? <LoaderCircle size={17} className="loading-icon" aria-hidden="true" /> : <Send size={17} aria-hidden="true" />}
        {pending ? t("sending") : t("send")}
      </button>
      <p className={status?.kind === "error" ? "notice notice-error" : "status-message"} role={status?.kind === "error" ? "alert" : "status"}>{status?.text}</p>
    </form>
  );
}
