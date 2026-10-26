import { useId, type ComponentProps } from "react";

type Base = { label: string; name: string; error?: string; hint?: string };
type InputProps = Base & { as?: "input" } & Omit<ComponentProps<"input">, "name">;
type AreaProps = Base & { as: "textarea" } & Omit<ComponentProps<"textarea">, "name">;
type SelectProps = Base & { as: "select" } & Omit<ComponentProps<"select">, "name">;

/** A labelled control with an inline, programmatically-associated error and hint. */
export function TextField(props: InputProps | AreaProps | SelectProps) {
  const id = useId();
  const { label, name, error, hint, as = "input", ...rest } = props;
  const describedBy = [error ? `${id}-error` : "", hint ? `${id}-hint` : ""].filter(Boolean).join(" ") || undefined;
  const common = { id, name, className: "form-control", "aria-invalid": error ? true : undefined, "aria-describedby": describedBy };

  return (
    <div className="form-label">
      <label htmlFor={id}>{label}</label>
      {as === "textarea" ? (
        <textarea {...common} {...(rest as ComponentProps<"textarea">)} />
      ) : as === "select" ? (
        <select {...common} {...(rest as ComponentProps<"select">)} />
      ) : (
        <input {...common} {...(rest as ComponentProps<"input">)} />
      )}
      {hint && <small id={`${id}-hint`} className="field-hint">{hint}</small>}
      {error && <small id={`${id}-error`} className="field-error" role="alert">{error}</small>}
    </div>
  );
}
