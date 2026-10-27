import { Container, Section } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceFilters } from "@/components/services/ServiceFilters";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Dental Services",
  description:
    "Browse general, preventive, cosmetic and restorative dental services at Dynasty Dental Solutions and learn what each may involve.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental Services"
        title="Find the Care That Fits Your Smile."
        description="Search or filter our services to learn what each may involve. Information here is general; the right option for you is best discussed with a dental professional."
        breadcrumbs={[{ label: "Services" }]}
      />
      <Section>
        <Container>
          <ServiceFilters />
        </Container>
      </Section>
      <CTASection
        title="Not Sure Which Service You Need?"
        description="Describe your concerns and the clinic can help you work out a sensible next step."
        secondary={{ label: "Read Patient Information", href: "/patient-information" }}
      />
    </>
  );
}
