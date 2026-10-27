import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/services/ServiceCard";
import { featuredServices } from "@/data/services";

export function FeaturedServices() {
  // First three are image-led feature cards; the rest are compact cards.
  const lead = featuredServices.slice(0, 3);
  const rest = featuredServices.slice(3);

  return (
    <Section tone="white">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Our Services" title="Care for Every Stage of Your Smile." />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lead.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08} className="h-full">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {rest.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06} className="h-full">
              <ServiceCard service={s} variant="compact" />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/services" arrow>
            View All Services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
