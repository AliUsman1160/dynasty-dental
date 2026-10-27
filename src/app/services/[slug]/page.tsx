import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/ui/CTASection";
import { RelatedServices } from "@/components/services/RelatedServices";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { getService, services } from "@/data/services";
import { pageMetadata } from "@/lib/utils";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return pageMetadata({ title: service.name, description: service.intro, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceDetails service={service} />
      <RelatedServices service={service} />
      <CTASection
        title={`Interested in ${service.name}?`}
        description="Contact the clinic to discuss your concerns and find out whether this option may be suitable for you."
      />
    </>
  );
}
