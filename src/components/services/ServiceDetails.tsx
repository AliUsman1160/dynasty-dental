import { CheckCircle2, Info, MinusCircle } from "lucide-react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SafeImage } from "@/components/ui/SafeImage";
import { serviceDisclaimer } from "@/data/services";
import type { Service } from "@/types";
import { ServiceIcon } from "./ServiceIcon";

const h2 = "text-2xl font-extrabold sm:text-3xl";

export function ServiceDetails({ service }: { service: Service }) {
  return (
    <>
      <section className="bg-mist">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <Reveal immediate>
            <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.name }]} />
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-dark">
              <ServiceIcon name={service.icon} className="size-4" />
              {service.category}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">{service.name}</h1>
            <p className="mt-5 max-w-[55ch] text-lg">{service.intro}</p>
            <Button href="/contact" arrow className="mt-8">
              Request an Appointment
            </Button>
          </Reveal>
          <Reveal immediate delay={0.1}>
            <SafeImage
              src={service.image}
              alt={`${service.name} — illustrative stock photo`}
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
              width={1400}
              wrapperClassName="aspect-[4/3] rounded-[2rem] rounded-tr-[5rem] shadow-lift"
            />
          </Reveal>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div className="space-y-14">
            <Reveal>
              <h2 className={h2}>Overview</h2>
              <div className="mt-5 max-w-[65ch] space-y-4">
                {service.overview.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className={h2}>Why Someone Might Seek an Assessment</h2>
              <ul className="mt-5 space-y-3">
                {service.reasons.map((r) => (
                  <li key={r} className="flex gap-3">
                    <CheckCircle2 aria-hidden className="mt-1 size-5 shrink-0 text-teal" />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className={h2}>A General Treatment Process</h2>
              <ol className="mt-6 space-y-5">
                {service.process.map((s, i) => (
                  <li key={s.title} className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy font-heading font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold">{s.title}</h3>
                      <p>{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <h2 className="text-xl font-bold">Potential Benefits</h2>
                <ul className="mt-4 space-y-3 text-[0.95rem]">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex gap-3">
                      <CheckCircle2 aria-hidden className="mt-1 size-4 shrink-0 text-teal" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-soft">
                <h2 className="text-xl font-bold">Limitations to Consider</h2>
                <ul className="mt-4 space-y-3 text-[0.95rem]">
                  {service.limitations.map((b) => (
                    <li key={b} className="flex gap-3">
                      <MinusCircle aria-hidden className="mt-1 size-4 shrink-0 text-navy/60" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <h2 className={h2}>Common Questions</h2>
              <Accordion items={service.faqs} className="mt-6" />
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl bg-navy p-7 text-white">
              <h2 className="text-2xl font-bold !text-white">Talk to the Clinic</h2>
              <p className="mt-3 text-white/80">Ask about {service.name.toLowerCase()} and whether it may be right for you.</p>
              <Button href="/contact" variant="teal" className="mt-6 w-full">
                Request an Appointment
              </Button>
            </div>
            <div className="mt-6 flex gap-3 rounded-2xl border border-line bg-white p-5 text-sm">
              <Info aria-hidden className="mt-0.5 size-5 shrink-0 text-teal" />
              <p>
                {serviceDisclaimer} This page offers general information and does not replace an in-person dental
                assessment. Outcomes cannot be guaranteed.
              </p>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  );
}
