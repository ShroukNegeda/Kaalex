"use client";

import { useId } from "react";
import { useLanguage } from "@/context/language-context";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

const KAALEX_FAKE_EMAIL = "hello@kaalexstudio.com";

export function ContactForm({
  className,
  id,
  variant = "default",
}: {
  className?: string;
  id?: string;
  variant?: "default" | "project";
}) {
  const { t } = useLanguage();
  const f = t.home.form;
  const detailsId = useId();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const need = String(formData.get("need") ?? "").trim();
    const budget = String(formData.get("budget") ?? "").trim();
    const stage = String(formData.get("stage") ?? "").trim();
    const services = formData.getAll("services").join(", ");
    const details = String(formData.get("details") ?? "").trim();

    const subject = encodeURIComponent(
      fullName ? `New project inquiry from ${fullName}` : "New project inquiry"
    );

    const body = encodeURIComponent(
      [
        "Full name: " + (fullName || "-"),
        "Company / brand: " + (company || "-"),
        "Email: " + (email || "-"),
        "Phone / WhatsApp: " + (phone || "-"),
        "Services: " + (services || need || "-"),
        "Project stage: " + (stage || "-"),
        "Budget range: " + (budget || "-"),
        "",
        "Project details:",
        details || "-",
      ].join("\n")
    );

    window.location.href = `mailto:${KAALEX_FAKE_EMAIL}?subject=${subject}&body=${body}`;
  };

  if (variant === "project") {
    return <ProjectForm id={id} className={className} form={f} onSubmit={handleSubmit} />;
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={clsx(
        "w-full scroll-mt-24 rounded-2xl border border-border bg-surface p-6 sm:p-7",
        className
      )}
    >
      <p className="font-display text-lg font-semibold text-text">{f.title}</p>
      <p className="mt-1.5 text-sm text-text-muted">{f.desc}</p>

      <div className="mt-6 space-y-4">
        <Field label={f.fullName} name="fullName" required />
        <Field label={f.email} name="email" type="email" required />
        <div className="grid grid-cols-2 gap-4">
          <Field label={f.need} name="need" required />
          <Field label={f.budget} name="budget" required />
        </div>
        <div>
          <label htmlFor={detailsId} className="mb-1.5 block text-xs font-medium text-text-muted">
            {f.details}
          </label>
          <textarea
            id={detailsId}
            name="details"
            rows={4}
            required
            className="w-full resize-none rounded-lg border border-border bg-bg-elevated px-3.5 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-contrast transition-colors hover:bg-accent-2"
      >
        {f.submit}
        <ArrowRight size={15} />
      </button>
      <p className="mt-3 text-center text-xs text-text-faint">{f.note}</p>
    </form>
  );
}

function ProjectForm({
  id,
  className,
  form,
  onSubmit,
}: {
  id?: string;
  className?: string;
  form: typeof import("@/lib/dictionaries/en").default.home.form;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}) {
  const detailsId = useId();

  return (
    <form
      id={id}
      onSubmit={onSubmit}
      className={clsx(
        "w-full scroll-mt-24 rounded-xl border border-border bg-bg-elevated p-6 shadow-[0_16px_35px_rgba(16,16,16,0.08)] sm:p-8",
        className
      )}
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10">
        <div>
          <h2 className="font-display text-lg font-semibold text-text">{form.title}</h2>
          <p className="mt-1 text-xs text-text-muted">{form.desc}</p>

          <div className="mt-5 space-y-3">
            <p className="text-xs font-semibold text-text">Your Information</p>
            <Field label={form.fullName} name="fullName" required />
            <Field label={form.company} name="company" />
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label={form.email} name="email" type="email" required />
              <Field label={form.phone} name="phone" />
            </div>
          </div>
        </div>

        <div>
          <fieldset>
            <legend className="text-[11px] font-medium text-text-muted">{form.servicesQuestion}</legend>
            <div className="mt-2 grid grid-cols-2 gap-3">
              {form.services.map((service) => (
                <label key={service} className="flex min-h-11 items-center gap-2 rounded-xl border border-border bg-surface px-3 text-xs text-text-muted transition-colors has-checked:border-accent has-checked:bg-accent/10">
                  <input type="checkbox" name="services" value={service} className="h-4 w-4 appearance-none rounded-full border border-text-muted bg-transparent checked:border-[5px] checked:border-accent" />
                  {service}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Field label={form.stage} name="stage" placeholder="Enter your email" />
            <Field label={form.budget} name="budget" placeholder="Select your Budget range" />
          </div>
          <div className="mt-3">
            <label htmlFor={detailsId} className="mb-1.5 block text-[11px] font-medium text-text-muted">{form.details}</label>
            <textarea id={detailsId} name="details" rows={5} required placeholder="........" className="w-full resize-none rounded-xl border border-border bg-surface px-3 py-3 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none" />
          </div>
        </div>
      </div>

      <button type="submit" className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-accent px-5 py-3 text-xs font-semibold text-accent-contrast transition-colors hover:bg-accent-2">
        {form.submit}
        <ArrowRight size={14} />
      </button>
      <p className="mt-2 text-center text-[10px] text-text-faint">{form.note}</p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  const fieldId = useId();

  return (
    <div>
      <label htmlFor={fieldId} className="mb-1.5 block text-xs font-medium text-text-muted">
        {label}
      </label>
      <input
        id={fieldId}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-bg-elevated px-3.5 py-2.5 text-sm text-text placeholder:text-text-faint focus:border-accent focus:outline-none"
      />
    </div>
  );
}
