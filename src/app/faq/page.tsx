import { Accordion } from "@/components/ui/Accordion";
import { Container, Section } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { faqCategories, faqs } from "@/data/faqs";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description: "General answers about dental services, appointments, preventive care and preparing for your visit.",
  path: "/faq",
});

export default function FAQPage() {
  const groups = faqCategories
    .map((category) => ({ category, items: faqs.filter((f) => f.category === category) }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Questions About Dental Care?"
        description="General answers to common questions. They are educational and not a substitute for advice from a dental professional."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <Section>
        <Container className="max-w-4xl">
          <nav aria-label="FAQ categories" className="mb-12 flex flex-wrap gap-2">
            {groups.map((g) => (
              <a
                key={g.category}
                href={`#${g.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="min-h-11 rounded-full border border-line bg-white px-4 py-2.5 text-sm font-semibold text-navy hover:border-navy/40"
              >
                {g.category}
              </a>
            ))}
          </nav>
          <div className="space-y-12">
            {groups.map((g) => (
              <section key={g.category} id={g.category.toLowerCase().replace(/\s+/g, "-")}>
                <h2 className="mb-5 text-2xl font-extrabold">{g.category}</h2>
                <Accordion items={g.items} />
              </section>
            ))}
          </div>
        </Container>
      </Section>
      <CTASection
        title="Still Have a Question?"
        description="Contact the clinic and we will be glad to help."
        secondary={{ label: "Patient Information", href: "/patient-information" }}
      />
    </>
  );
}
