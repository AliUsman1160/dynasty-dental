import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ToothMark } from "@/components/ui/Logo";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="bg-mist">
      <Container className="grid min-h-[60vh] place-items-center py-20 text-center">
        <div>
          <ToothMark className="mx-auto size-16 text-teal" />
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-teal-dark">Error 404</p>
          <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl">We Couldn&apos;t Find That Page.</h1>
          <p className="mx-auto mt-4 max-w-md">The page may have moved or the address may be mistyped. Let&apos;s get you back on track.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/">Back to Home</Button>
            <Button href="/services" variant="secondary">
              Browse Services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
