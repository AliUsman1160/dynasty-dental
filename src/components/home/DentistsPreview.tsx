import { DentistCard } from "@/components/dentists/DentistCard";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { dentists } from "@/data/dentists";

export function DentistsPreview() {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Team"
            title="Meet the People Behind Your Smile."
            description="Team profiles below are demo placeholders until verified details are supplied."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
          {dentists.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.1} className="h-full">
              <DentistCard dentist={d} compact />
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <Button href="/dentists" variant="secondary" arrow>
            Meet Our Team
          </Button>
        </div>
      </Container>
    </Section>
  );
}
