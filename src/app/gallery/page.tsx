import { Container, Section } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Gallery",
  description: "A look at the kind of clinic environment, equipment and patient experience Dynasty Dental Solutions aims to provide.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Inside Our Practice."
        description="Browse images of modern dental environments. Photos shown are illustrative placeholders until real clinic photography is added."
        breadcrumbs={[{ label: "Gallery" }]}
      />
      <Section>
        <Container>
          <GalleryGrid />
        </Container>
      </Section>
      <CTASection />
    </>
  );
}
