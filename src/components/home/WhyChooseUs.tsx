import { Armchair, ClipboardList, HeartHandshake, MessagesSquare } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  { icon: HeartHandshake, title: "Patient-Centered Approach", text: "Care discussions that take your concerns and preferences into account." },
  { icon: MessagesSquare, title: "Clear Communication", text: "Understand the options available and what each treatment may involve." },
  { icon: ClipboardList, title: "Thoughtful Treatment Planning", text: "Explore suitable next steps based on your individual dental needs." },
  { icon: Armchair, title: "Comfort-Focused Environment", text: "A welcoming setting designed to help patients feel at ease." },
];

export function WhyChooseUs() {
  return (
    <Section tone="mist">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <SectionHeading eyebrow="Why Dynasty" title="A Better Experience at Every Visit." />
        </Reveal>
        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.07}>
                <span className="grid size-14 place-items-center rounded-2xl bg-white text-teal-dark shadow-soft">
                  <Icon aria-hidden className="size-7" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-2">{text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
