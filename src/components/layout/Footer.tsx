import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { placeholders, siteConfig } from "@/lib/config";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/dentists", label: "Our Dentists" },
  { href: "/patient-information", label: "Patient Information" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
];

const popular = ["general-dentistry", "cosmetic-dentistry", "preventive-care", "teeth-whitening", "dental-implants"]
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s) => s !== undefined);

const linkClass = "text-white/75 transition-colors hover:text-white";
const h = "mb-4 font-heading text-sm font-bold uppercase tracking-[0.14em] !text-white";

export function Footer() {
  const { contact, openingHours } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white/75">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Logo invert />
          <p className="mt-5 max-w-xs text-sm">
            Personalized dental care with clear guidance and a welcoming experience, focused on your long-term oral health.
          </p>
        </div>

        <nav aria-label="Quick links">
          <h2 className={h}>Quick Links</h2>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Popular services">
          <h2 className={h}>Popular Services</h2>
          <ul className="space-y-2.5 text-sm">
            {popular.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={linkClass}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={h}>Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Phone aria-hidden className="mt-0.5 size-4 shrink-0 text-teal" />
              {contact.phone ? <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={linkClass}>{contact.phone}</a> : <span>{placeholders.phone}</span>}
            </li>
            <li className="flex gap-3">
              <Mail aria-hidden className="mt-0.5 size-4 shrink-0 text-teal" />
              {contact.email ? <a href={`mailto:${contact.email}`} className={`${linkClass} break-all`}>{contact.email}</a> : <span>{placeholders.email}</span>}
            </li>
            <li className="flex gap-3">
              <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-teal" />
              <span>{contact.address || placeholders.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock aria-hidden className="mt-0.5 size-4 shrink-0 text-teal" />
              {openingHours.length ? (
                <span>
                  {openingHours.map((o) => (
                    <span key={o.days} className="block">
                      {o.days}: {o.hours}
                    </span>
                  ))}
                </span>
              ) : (
                <span>{placeholders.hours}</span>
              )}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className={linkClass}>
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
