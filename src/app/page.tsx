import { CareJourney } from "@/components/home/CareJourney";
import { DentistsPreview } from "@/components/home/DentistsPreview";
import { FAQPreview } from "@/components/home/FAQPreview";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTASection } from "@/components/ui/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Introduction />
      <FeaturedServices />
      <WhyChooseUs />
      <CareJourney />
      <DentistsPreview />
      <GalleryPreview />
      <Testimonials />
      <FAQPreview />
      <CTASection />
    </>
  );
}
