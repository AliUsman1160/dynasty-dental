import { Building2, HeartHandshake, MessageCircleHeart, UserRoundCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";

/** Editable highlights — keep them factual; no unverified statistics. */
const highlights = [
  { icon: UserRoundCheck, label: "Personalized Care" },
  { icon: MessageCircleHeart, label: "Clear Treatment Guidance" },
  { icon: HeartHandshake, label: "Patient-Focused Experience" },
  { icon: Building2, label: "Modern Dental Environment" },
];

export function TrustStrip() {
  return (
    <section aria-label="Our care at a glance" className="border-y border-line bg-white">
      <Container>
        <ul className="grid grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={`flex items-center gap-3 px-2 py-5 sm:px-6 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${i % 2 === 1 ? "border-l border-line lg:border-l" : ""}`}
            >
              <Icon aria-hidden className="size-6 shrink-0 text-teal" strokeWidth={1.6} />
              <span className="text-sm font-bold leading-snug text-navy sm:text-[0.95rem]">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
