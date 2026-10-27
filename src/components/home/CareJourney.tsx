import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const journeySteps = [
  { n: "01", title: "Tell Us Your Concerns", text: "Share what is bothering you and what you would like to improve." },
  { n: "02", title: "Discuss Your Options", text: "Learn about relevant treatment options and their considerations." },
  { n: "03", title: "Plan Your Next Steps", text: "Discuss an appropriate care plan with the dental professional." },
];

export function CareJourney({ showCta = true }: { showCta?: boolean }) {
  return (
    <Section tone="navy" className="overflow-hidden">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            invert
            eyebrow="Our Approach"
            title="Your Dental Journey, Made Clear."
            description="From your first conversation to your next steps, we aim to keep things simple, transparent and unhurried."
          />
          {showCta && (
            <Button href="/contact" variant="teal" arrow className="mt-9">
              Request a Consultation
            </Button>
          )}
        </Reveal>
        <ol className="relative space-y-8">
          <span aria-hidden className="absolute bottom-6 left-[1.65rem] top-6 w-px bg-white/20" />
          {journeySteps.map((s, i) => (
            <li key={s.n}>
              <Reveal delay={i * 0.1} className="relative flex gap-5 sm:gap-6">
                <span className="relative z-10 grid size-14 shrink-0 place-items-center rounded-full bg-teal font-heading text-lg font-extrabold text-white ring-8 ring-navy">
                  {s.n}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-xl font-bold !text-white">{s.title}</h3>
                  <p className="mt-1.5 max-w-[46ch] text-white/75">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
