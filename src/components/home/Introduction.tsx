import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

const points = [
  "Individualized Treatment Discussions",
  "Clear Communication",
  "A Welcoming Patient Experience",
];

export function Introduction() {
  return (
    <Section>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-last lg:order-first">
          <SafeImage
            src="intro"
            alt="A dentist and assistant caring for a patient in a clean treatment room (illustrative stock photo)"
            sizes="(min-width: 1024px) 45vw, 100vw"
            wrapperClassName="aspect-[5/4] rounded-[2rem] rounded-bl-[6rem] shadow-lift"
          />
          <div aria-hidden className="absolute -left-4 -top-4 -z-10 size-2/3 rounded-[2.5rem] bg-mist" />
        </Reveal>
        <Reveal>
          <SectionHeading
            eyebrow="Welcome to Dynasty"
            title="Dental Care Designed Around You."
            description="Every smile is different. Our approach begins with understanding your concerns, discussing your options, and helping you make informed decisions about your dental health."
          />
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-heading font-bold text-navy">
                <CheckCircle2 aria-hidden className="size-6 shrink-0 text-teal" />
                {p}
              </li>
            ))}
          </ul>
          <Button href="/about" variant="secondary" arrow className="mt-9">
            Learn About Our Practice
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
