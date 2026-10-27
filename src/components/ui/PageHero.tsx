import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface Props {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  breadcrumbs: { label: string; href?: string }[];
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, description, breadcrumbs, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div aria-hidden className="absolute -right-24 -top-24 size-80 rounded-full bg-white/60" />
      <div aria-hidden className="absolute -bottom-32 right-1/4 size-64 rounded-full bg-teal/10" />
      <Container className="relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs items={breadcrumbs} />
        <Reveal immediate>
          <SectionHeading as="h1" eyebrow={eyebrow} title={title} description={description} />
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </Container>
    </section>
  );
}
