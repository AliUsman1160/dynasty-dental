import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages, galleryPreviewIds } from "@/data/gallery";

// Mixed-size layout for the five preview tiles (desktop).
const spans = ["lg:col-span-2 lg:row-span-2", "", "", "", ""];

export function GalleryPreview() {
  const items = galleryPreviewIds.map((id) => galleryImages.find((g) => g.id === id)).filter((g) => g !== undefined);

  return (
    <Section tone="white">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Inside Our Practice."
            description="Illustrative stock photography representing the kind of environment patients can expect. These are not photographs of the actual clinic."
          />
        </Reveal>
        <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-3 sm:auto-rows-[15rem] sm:gap-4 lg:grid-cols-4">
          {items.map((img, i) => (
            <Reveal key={img.id} delay={i * 0.06} className={`group h-full ${spans[i] ?? ""} ${i === 0 ? "col-span-2" : ""}`}>
              <SafeImage
                src={img.image}
                alt={img.alt}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="transition-transform duration-700 group-hover:scale-105"
                wrapperClassName="h-full rounded-2xl"
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/gallery" variant="secondary" arrow>
            Explore the Gallery
          </Button>
        </div>
      </Container>
    </Section>
  );
}
