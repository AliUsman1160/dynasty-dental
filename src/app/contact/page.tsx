import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { Container, Section } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { placeholders, siteConfig } from "@/lib/config";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Contact & Appointment Inquiry",
  description: "Get in touch with Dynasty Dental Solutions to ask about care options or request an appointment.",
  path: "/contact",
});

function InfoCard({ icon: Icon, title, children }: { icon: typeof Phone; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-line bg-white p-5">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-mist text-teal-dark">
        <Icon aria-hidden className="size-5" />
      </span>
      <div className="min-w-0">
        <h2 className="text-base font-bold">{title}</h2>
        <div className="mt-1 text-[0.95rem] break-words">{children}</div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const { contact, openingHours } = siteConfig;
  const waNumber = contact.whatsappNumber.replace(/\D/g, "");

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Talk About Your Smile."
        description="Send an inquiry or reach the clinic directly. For urgent dental problems, please call rather than using the form."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <Section>
        <Container className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="space-y-4">
            <InfoCard icon={Phone} title="Phone">
              {contact.phone ? <a className="font-semibold text-navy hover:underline" href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a> : placeholders.phone}
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              {contact.email ? <a className="font-semibold text-navy hover:underline" href={`mailto:${contact.email}`}>{contact.email}</a> : placeholders.email}
            </InfoCard>
            <InfoCard icon={MapPin} title="Address">{contact.address || placeholders.address}</InfoCard>
            <InfoCard icon={Clock} title="Opening Hours">
              {openingHours.length ? openingHours.map((o) => <span key={o.days} className="block">{o.days}: {o.hours}</span>) : placeholders.hours}
            </InfoCard>
            {waNumber && (
              <InfoCard icon={MessageCircle} title="WhatsApp">
                <a className="font-semibold text-navy hover:underline" href={`https://wa.me/${waNumber}`} target="_blank" rel="noopener noreferrer">
                  Message the clinic
                </a>
              </InfoCard>
            )}
            <p className="rounded-2xl bg-mist p-5 text-sm [&_code]:break-all">
              Contact details above are placeholders until the clinic&apos;s verified details are added to <code>src/lib/config.ts</code>.
            </p>
          </div>
          <AppointmentForm />
        </Container>
      </Section>
    </>
  );
}
