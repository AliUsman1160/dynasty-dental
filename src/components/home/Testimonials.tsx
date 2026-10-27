import { Quote } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { careCommitments, testimonials } from "@/data/testimonials";

/** Shows real testimonials when supplied; otherwise a patient-care philosophy panel. */
export function Testimonials() {
  const hasReviews = testimonials.length > 0;

  return (
    <Section tone="mist">
      <Container>
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow={hasReviews ? "Testimonials" : "Our Philosophy"}
            title="Patient Experiences Matter."
            description={hasReviews ? undefined : "Verified patient reviews will appear here. Until then, this is how we aim to care for every patient."}
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {hasReviews
            ? testimonials.map((t, i) => (
                <Reveal key={t.name + i} delay={i * 0.08} className="h-full">
                  <figure className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-soft">
                    <Quote aria-hidden className="size-8 text-teal" />
                    <blockquote className="mt-4 flex-1 text-ink">{t.text}</blockquote>
                    <figcaption className="mt-6 text-sm">
                      <strong className="font-heading text-navy">{t.name}</strong>
                      {t.treatment && <span> · {t.treatment}</span>}
                    </figcaption>
                  </figure>
                </Reveal>
              ))
            : careCommitments.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08} className="h-full">
                  <div className="h-full rounded-3xl bg-white p-7 shadow-soft">
                    <Quote aria-hidden className="size-8 text-teal" />
                    <h3 className="mt-4 text-xl font-bold">{c.title}</h3>
                    <p className="mt-2">{c.text}</p>
                  </div>
                </Reveal>
              ))}
        </div>
      </Container>
    </Section>
  );
}
