import { CalendarCheck, ClipboardList, HelpCircle, Info, SprayCan, Sprout } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { CTASection } from "@/components/ui/CTASection";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Patient Information",
  description: "What to expect at a first dental visit, how to prepare, questions to ask and general oral-care guidance.",
  path: "/patient-information",
});

const blocks = [
  {
    icon: CalendarCheck,
    title: "What to Expect at a First Visit",
    items: [
      "A conversation about your concerns, goals and dental history",
      "An examination of your teeth, gums and mouth",
      "A discussion of findings and any options, with time for questions",
      "Guidance on possible next steps, if any are needed",
    ],
  },
  {
    icon: ClipboardList,
    title: "How to Prepare",
    items: [
      "List any medicines, supplements and allergies",
      "Note relevant medical conditions or recent changes in your health",
      "Bring details of previous dental care, if you have them",
      "Write down symptoms: when they started and what makes them better or worse",
    ],
  },
  {
    icon: HelpCircle,
    title: "Questions to Ask Your Dentist",
    items: [
      "What did you find, and what does it mean for me?",
      "What are my options, including doing nothing for now?",
      "What are the benefits, risks and limitations of each?",
      "What would aftercare and follow-up involve?",
    ],
  },
  {
    icon: SprayCan,
    title: "General Oral Hygiene",
    items: [
      "Brush for two minutes twice a day with fluoride toothpaste",
      "Clean between teeth daily using floss or interdental brushes",
      "Replace your toothbrush or brush head regularly",
      "Avoid smoking and limit tobacco products",
    ],
  },
  {
    icon: Sprout,
    title: "Preventive-Care Guidance",
    items: [
      "Limit how often you have sugary foods and drinks",
      "Attend dental check-ups at the interval your dentist suggests",
      "Wear a mouthguard for contact sports, if advised",
      "Contact the clinic promptly if you notice pain, bleeding or swelling",
    ],
  },
];

export default function PatientInformationPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Information"
        title="Know What to Expect."
        description="Simple, practical information to help you feel prepared before, during and after your visit."
        breadcrumbs={[{ label: "Patient Information" }]}
      />
      <Section>
        <Container>
          <Reveal>
            <SectionHeading title="Helpful Guidance for Every Patient" description="This page is general and educational. It cannot diagnose a condition or replace advice from a dental professional who has examined you." />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {blocks.map(({ icon: Icon, title, items }, i) => (
              <Reveal key={title} delay={(i % 2) * 0.08} className="h-full">
                <section className="h-full rounded-3xl bg-white p-7 shadow-soft">
                  <span className="grid size-12 place-items-center rounded-xl bg-mist text-teal-dark">
                    <Icon aria-hidden className="size-6" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-5 text-2xl font-bold">{title}</h2>
                  <ul className="mt-4 space-y-3">
                    {items.map((t) => (
                      <li key={t} className="flex gap-3">
                        <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 flex gap-3 rounded-2xl border border-line bg-white p-5 text-sm">
            <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-teal" />
            If you have severe pain, facial swelling or a dental injury, contact the clinic directly or seek urgent care
            rather than waiting for a routine appointment.
          </p>
        </Container>
      </Section>
      <CTASection
        title="Ready to Ask Your Questions?"
        description="Send an appointment inquiry or contact the clinic directly."
        secondary={{ label: "Read the FAQs", href: "/faq" }}
      />
    </>
  );
}
