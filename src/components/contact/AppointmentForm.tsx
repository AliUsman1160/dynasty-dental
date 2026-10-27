"use client";

import { AlertCircle, Info, MessageCircle } from "lucide-react";
import { useId, useState } from "react";
import { ButtonEl } from "@/components/ui/Button";
import { demoNotice, siteConfig } from "@/lib/config";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

interface Values {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
  message: string;
  consent: boolean;
}
type Errors = Partial<Record<keyof Values, string>>;

const empty: Values = { name: "", email: "", phone: "", date: "", time: "", service: "", message: "", consent: false };
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v: Values): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your full name.";
  if (!v.email.trim()) e.email = "Please enter your email address.";
  else if (!emailRe.test(v.email.trim())) e.email = "Please enter a valid email address, such as name@example.com.";
  if (!v.phone.trim()) e.phone = "Please enter a phone number.";
  else if (v.phone.replace(/\D/g, "").length < 7) e.phone = "Please enter a valid phone number.";
  if (!v.service) e.service = "Please choose a service of interest.";
  if (!v.message.trim()) e.message = "Please tell us briefly how we can help.";
  if (!v.consent) e.consent = "Please confirm you agree before submitting.";
  return e;
}

const field =
  "w-full rounded-xl border bg-white px-4 py-3 text-ink placeholder:text-body/60 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30";

export function AppointmentForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState<Values | null>(null);

  const set = <K extends keyof Values>(key: K, value: Values[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstKey = Object.keys(found)[0];
    if (firstKey) {
      document.getElementById(`${uid}-${firstKey}`)?.focus();
      return;
    }
    // Frontend-only demo: nothing is sent or stored.
    setSubmitted(values);
  };

  const whatsappHref = (() => {
    const number = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
    if (!number || !submitted) return null;
    const lines = [
      "Hello, I would like to ask about an appointment.",
      `Name: ${submitted.name}`,
      submitted.service && `Service of interest: ${services.find((s) => s.slug === submitted.service)?.name}`,
      submitted.date && `Preferred date: ${submitted.date}`,
      submitted.time && `Preferred time: ${submitted.time}`,
      submitted.message && `Message: ${submitted.message}`,
    ].filter(Boolean);
    return `https://wa.me/${number}?text=${encodeURIComponent(lines.join("\n"))}`;
  })();

  if (submitted) {
    return (
      <div role="status" className="rounded-3xl border border-teal/30 bg-mist p-7 sm:p-9">
        <Info aria-hidden className="size-8 text-teal-dark" />
        <h2 className="mt-4 text-2xl font-bold">Form checked — nothing was sent</h2>
        <p className="mt-3 max-w-[55ch] font-medium text-ink">{demoNotice}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          {whatsappHref && (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-teal px-6 py-3 font-semibold text-white hover:bg-teal-dark"
            >
              <MessageCircle aria-hidden className="size-5" /> Continue on WhatsApp
            </a>
          )}
          <ButtonEl
            type="button"
            variant="secondary"
            onClick={() => {
              setSubmitted(null);
              setValues(empty);
            }}
          >
            Edit or start again
          </ButtonEl>
        </div>
      </div>
    );
  }

  const id = (k: string) => `${uid}-${k}`;
  const err = (k: keyof Values) => errors[k];
  const describe = (k: keyof Values) => (err(k) ? `${id(k)}-error` : undefined);
  const fieldError = (k: keyof Values) =>
    err(k) ? (
      <p id={`${id(k)}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-red-700">
        <AlertCircle aria-hidden className="size-4 shrink-0" />
        {err(k)}
      </p>
    ) : null;
  const border = (k: keyof Values) => (err(k) ? "border-red-500" : "border-line");
  const label = "mb-1.5 block text-sm font-semibold text-navy";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-3xl bg-white p-6 shadow-soft sm:p-9">
      <h2 className="text-2xl font-bold">Appointment Inquiry</h2>
      <p className="mt-2 text-sm">
        Fields marked <span aria-hidden>*</span>
        <span className="sr-only">with an asterisk</span> are required. Please do not include sensitive health details.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={id("name")} className={label}>Full name *</label>
          <input id={id("name")} autoComplete="name" value={values.name} onChange={(e) => set("name", e.target.value)} aria-required="true" aria-invalid={!!err("name")} aria-describedby={describe("name")} className={cn(field, border("name"))} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor={id("email")} className={label}>Email *</label>
          <input id={id("email")} type="email" autoComplete="email" value={values.email} onChange={(e) => set("email", e.target.value)} aria-required="true" aria-invalid={!!err("email")} aria-describedby={describe("email")} className={cn(field, border("email"))} />
          {fieldError("email")}
        </div>
        <div>
          <label htmlFor={id("phone")} className={label}>Phone *</label>
          <input id={id("phone")} type="tel" autoComplete="tel" value={values.phone} onChange={(e) => set("phone", e.target.value)} aria-required="true" aria-invalid={!!err("phone")} aria-describedby={describe("phone")} className={cn(field, border("phone"))} />
          {fieldError("phone")}
        </div>
        <div>
          <label htmlFor={id("service")} className={label}>Service of interest *</label>
          <select id={id("service")} value={values.service} onChange={(e) => set("service", e.target.value)} aria-required="true" aria-invalid={!!err("service")} aria-describedby={describe("service")} className={cn(field, border("service"))}>
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
            <option value="not-sure">I&apos;m not sure yet</option>
          </select>
          {fieldError("service")}
        </div>
        <div>
          <label htmlFor={id("date")} className={label}>Preferred date (optional)</label>
          <input id={id("date")} type="date" value={values.date} onChange={(e) => set("date", e.target.value)} className={cn(field, "border-line")} />
        </div>
        <div>
          <label htmlFor={id("time")} className={label}>Preferred time (optional)</label>
          <input id={id("time")} type="time" value={values.time} onChange={(e) => set("time", e.target.value)} className={cn(field, "border-line")} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor={id("message")} className={label}>Message *</label>
          <textarea id={id("message")} rows={5} value={values.message} onChange={(e) => set("message", e.target.value)} aria-required="true" aria-invalid={!!err("message")} aria-describedby={describe("message")} className={cn(field, border("message"))} />
          {fieldError("message")}
        </div>
        <div className="sm:col-span-2">
          <div className="flex items-start gap-3">
            <input id={id("consent")} type="checkbox" checked={values.consent} onChange={(e) => set("consent", e.target.checked)} aria-required="true" aria-invalid={!!err("consent")} aria-describedby={describe("consent")} className="mt-1 size-5 shrink-0 accent-[#153B63]" />
            <label htmlFor={id("consent")} className="text-sm">
              I agree to be contacted about my inquiry and understand this form is a demonstration and does not book an appointment. *
            </label>
          </div>
          {fieldError("consent")}
        </div>
      </div>

      <ButtonEl type="submit" arrow className="mt-8 w-full sm:w-auto">
        Submit Inquiry
      </ButtonEl>
      <p className="mt-4 text-xs">This form runs in your browser only. Nothing you enter is sent, stored or saved.</p>
    </form>
  );
}
