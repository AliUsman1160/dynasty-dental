import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqPreviewIds, faqs } from "@/data/faqs";

export function FAQPreview() {
  const items = faqPreviewIds.map((id) => faqs.find((f) => f.id === id)).filter((f) => f !== undefined);

  return (
    <Section>
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions About Dental Care?"
            description="Quick, general answers. For advice about your own teeth, a dental professional needs to see you."
          />
          <Button href="/faq" variant="secondary" arrow className="mt-8">
            View All FAQs
          </Button>
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion items={items} />
        </Reveal>
      </Container>
    </Section>
  );
}
