import { Info } from "lucide-react";
import { DentistCard } from "@/components/dentists/DentistCard";
import { Container, Section } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { dentists } from "@/data/dentists";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Our Dentists",
  description: "Meet the dental professionals at Dynasty Dental Solutions.",
  path: "/dentists",
});

export default function DentistsPage() {
  const hasPlaceholders = dentists.some((d) => d.isPlaceholder);

  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="Meet the People Behind Your Smile."
        description="Our dental professionals are committed to listening, explaining clearly and supporting your long-term oral health."
        breadcrumbs={[{ label: "Our Dentists" }]}
      />
      <Section>
        <Container>
          {hasPlaceholders && (
            <p className="mb-10 flex gap-3 rounded-2xl border border-teal/30 bg-mist p-5 text-sm [&_code]:break-all">
              <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-teal-dark" />
              <span>
                The profiles below are demo placeholders. Replace them in <code>src/data/dentists.ts</code> with
                verified names, qualifications and portraits.
              </span>
            </p>
          )}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dentists.map((d, i) => (
              <Reveal key={d.id} delay={i * 0.08} className="h-full">
                <DentistCard dentist={d} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection
        title="Book a Conversation With Our Team."
        description="Get in touch to ask a question or request an appointment."
        secondary={{ label: "View Services", href: "/services" }}
      />
    </>
  );
}
