import { Container, Section } from "./Container";
import { PageHero } from "./PageHero";

/** Placeholder shell for legal pages. Real policy text must be supplied by the clinic. */
export function LegalPage({ title, description }: { title: string; description: string }) {
  return (
    <>
      <PageHero title={title} description={description} breadcrumbs={[{ label: title }]} />
      <Section>
        <Container className="max-w-3xl">
          <p className="rounded-2xl border border-line bg-white p-6">
            This page is a placeholder. The clinic&apos;s official {title.toLowerCase()} must be written or approved by
            the practice and, where required, reviewed by a qualified legal adviser before the website goes live.
          </p>
        </Container>
      </Section>
    </>
  );
}
