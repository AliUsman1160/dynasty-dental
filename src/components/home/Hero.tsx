"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SafeImage } from "@/components/ui/SafeImage";
import { ToothMark } from "@/components/ui/Logo";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist/60">
      <div aria-hidden className="absolute -left-32 top-0 size-[28rem] rounded-full bg-mist" />
      <Container className="relative grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-teal-dark"
          >
            <span aria-hidden className="h-px w-8 bg-current" />
            Your Smile, Our Priority
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08, ease }}
            className="text-[2.35rem] font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.6rem]"
          >
            Confident Smiles Start With <span className="text-teal-dark">Exceptional Care.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-6 max-w-[52ch] text-lg"
          >
            Discover a more comfortable approach to dental care, with personalized treatment options and a focus on your
            long-term oral health.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="/contact" arrow className="sm:min-w-56">
              Request an Appointment
            </Button>
            <Button href="/services" variant="secondary">
              Explore Our Services
            </Button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center gap-2.5 text-sm font-semibold text-navy"
          >
            <ToothMark className="size-5 text-teal" />
            Thoughtful care. Clear guidance. Healthier smiles.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div aria-hidden className="absolute -bottom-5 -right-5 size-3/4 rounded-[3rem] bg-teal/15 sm:-bottom-7 sm:-right-7" />
          <SafeImage
            src="heroConsult"
            alt="A dentist reviewing a scan with a patient during a consultation (illustrative stock photo)"
            sizes="(min-width: 1024px) 45vw, 100vw"
            priority
            width={1400}
            wrapperClassName="relative aspect-[4/4.4] rounded-[2rem] rounded-tr-[6rem] shadow-lift"
          />
          <div className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lift sm:-left-8">
            <span className="grid size-10 place-items-center rounded-xl bg-mist text-teal-dark">
              <ToothMark className="size-6" />
            </span>
            <span className="text-sm font-bold leading-tight text-navy">
              Personalized
              <span className="block font-medium text-body">treatment discussions</span>
            </span>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
