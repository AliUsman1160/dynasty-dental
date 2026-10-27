import { Armchair, HeartHandshake, MessagesSquare, ShieldCheck } from "lucide-react";
import { CareJourney } from "@/components/home/CareJourney";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Learn about the patient-centred approach, values and welcoming environment at Dynasty Dental Solutions.",
  path: "/about",
});

const values = [
  { icon: HeartHandshake, title: "Compassion", text: "We treat every patient with respect, patience and understanding." },
  { icon: MessagesSquare, title: "Clarity", text: "We explain options in plain language so you can decide with confidence." },
  { icon: ShieldCheck, title: "Integrity", text: "We aim to be honest about what treatment can and cannot do." },
  { icon: Armchair, title: "Comfort", text: "We work to create a calm, welcoming setting for every visit." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Dental Care That Starts With Listening."
        description="Dynasty Dental Solutions is built around a simple idea: dental care works best when patients feel heard, informed and comfortable."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <Section>
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Our Practice"
              title="A Welcoming Place for Your Dental Care."
              description="We aim to offer a calm, professional environment where you can talk openly about your teeth and your goals."
            />
            <p className="mt-5 max-w-[60ch]">
              From routine check-ups to more involved treatment discussions, our focus is on helping you understand your
              options and feel confident about your next steps.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <SafeImage
              src="reception"
              alt="A bright, welcoming dental reception area (illustrative stock photo)"
              sizes="(min-width: 1024px) 45vw, 100vw"
              wrapperClassName="aspect-[4/3] rounded-[2rem] rounded-tl-[5rem] shadow-lift"
            />
          </Reveal>
        </Container>
      </Section>

      <Section tone="mist">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-last lg:order-first">
            <SafeImage
              src="heroConsult"
              alt="A dentist discussing a scan with a patient (illustrative stock photo)"
              sizes="(min-width: 1024px) 45vw, 100vw"
              wrapperClassName="aspect-[4/3] rounded-[2rem] rounded-br-[5rem] shadow-lift"
            />
          </Reveal>
          <Reveal>
            <SectionHeading
              eyebrow="Our Philosophy"
              title="Patient Care, Not Pressure."
              description="You should never feel rushed or unsure about what is being discussed. We take time to understand your concerns before talking about treatment."
            />
            <p className="mt-5 max-w-[60ch]">
              Decisions about your health belong to you. Our role is to share clear, balanced information so those
              decisions are informed ones.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal>
            <SectionHeading align="center" eyebrow="Values & Approach" title="What Guides Our Care." />
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={i * 0.07} className="h-full">
                  <div className="h-full rounded-3xl bg-white p-6 shadow-soft">
                    <span className="grid size-12 place-items-center rounded-xl bg-mist text-teal-dark">
                      <Icon aria-hidden className="size-6" strokeWidth={1.6} />
                    </span>
                    <h3 className="mt-5 text-xl font-bold">{title}</h3>
                    <p className="mt-2 text-[0.95rem]">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="white">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="The Clinic Environment"
              title="Modern, Clean and Calm."
              description="We aim to provide a bright, well-kept setting equipped to support quality dental care."
            />
            <Button href="/gallery" variant="secondary" arrow className="mt-8">
              View the Gallery
            </Button>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <SafeImage src="clinicChairs" alt="Treatment chairs in a bright room (illustrative stock photo)" sizes="(min-width: 1024px) 22vw, 50vw" wrapperClassName="aspect-[3/4] rounded-2xl" />
            <SafeImage src="scanTablet" alt="Digital dental imaging on a tablet (illustrative stock photo)" sizes="(min-width: 1024px) 22vw, 50vw" wrapperClassName="mt-8 aspect-[3/4] rounded-2xl" />
          </Reveal>
        </Container>
      </Section>

      <CareJourney showCta={false} />
      <CTASection
        title="Come and Say Hello."
        description="Contact the clinic to ask a question or request an appointment."
        secondary={{ label: "Meet Our Team", href: "/dentists" }}
      />
    </>
  );
}
