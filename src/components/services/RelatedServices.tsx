import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getService } from "@/data/services";
import type { Service } from "@/types";
import { ServiceCard } from "./ServiceCard";

export function RelatedServices({ service }: { service: Service }) {
  const related = service.related.map(getService).filter((s) => s !== undefined);
  if (!related.length) return null;

  return (
    <Section tone="white">
      <Container>
        <SectionHeading eyebrow="Related Services" title="You May Also Want to Explore" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((s) => (
            <ServiceCard key={s.slug} service={s} variant="compact" />
          ))}
        </div>
      </Container>
    </Section>
  );
}
