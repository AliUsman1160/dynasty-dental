import { Button } from "./Button";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { ToothMark } from "./Logo";

interface Props {
  title?: string;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTASection({
  title = "Let's Take the Next Step Toward a Healthier Smile.",
  description = "Get in touch to discuss your dental concerns and explore the care options available to you.",
  primary = { label: "Request an Appointment", href: "/contact" },
  secondary = { label: "Explore Services", href: "/services" },
}: Props) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center sm:px-12 lg:py-20">
            <ToothMark className="absolute -left-10 -top-10 size-56 text-white/[0.04]" />
            <ToothMark className="absolute -bottom-12 -right-8 size-64 rotate-12 text-teal/15" />
            <div className="absolute inset-x-0 top-0 h-1 bg-teal" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-extrabold !text-white sm:text-4xl">{title}</h2>
              <p className="mx-auto mt-4 max-w-[52ch] text-lg text-white/80">{description}</p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Button href={primary.href} variant="teal">
                  {primary.label}
                </Button>
                <Button href={secondary.href} variant="light">
                  {secondary.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
