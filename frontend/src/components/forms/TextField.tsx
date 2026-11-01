import { useId, type ComponentProps, type ReactNode } from "react";

type Base = { label: string; name: string; error?: string; hint?: string; endSlot?: ReactNode };
type InputProps = Base & { as?: "input" } & Omit<ComponentProps<"input">, "name">;
type AreaProps = Base & { as: "textarea" } & Omit<ComponentProps<"textarea">, "name">;
type SelectProps = Base & { as: "select" } & Omit<ComponentProps<"select">, "name">;

/** A labelled control with an inline, programmatically-associated error and hint. */
export function TextField(props: InputProps | AreaProps | SelectProps) {
  const id = useId();
  const { label, name, error, hint, as = "input", endSlot, ...rest } = props;
  const describedBy = [error ? `${id}-error` : "", hint ? `${id}-hint` : ""].filter(Boolean).join(" ") || undefined;
  const common = { id, name, className: `form-control ${endSlot ? "has-end-slot" : ""}`, "aria-invalid": error ? true : undefined, "aria-describedby": describedBy };

  return (
    <div className="form-label">
      <label htmlFor={id}>{label}</label>
      {endSlot ? (
        <div className="form-input-container">
          {as === "textarea" ? (
            <textarea {...common} {...(rest as ComponentProps<"textarea">)} />
          ) : as === "select" ? (
            <select {...common} {...(rest as ComponentProps<"select">)} />
          ) : (
            <input {...common} {...(rest as ComponentProps<"input">)} />
          )}
          {endSlot}
        </div>
      ) : as === "textarea" ? (
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
