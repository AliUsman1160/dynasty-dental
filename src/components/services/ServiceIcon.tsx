import {
  AlignHorizontalDistributeCenter,
  Crown,
  HeartPulse,
  type LucideProps,
  Siren,
  Smile,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Sun,
  Wrench,
  Anchor,
} from "lucide-react";
import type { ServiceIconName } from "@/types";

const icons: Record<ServiceIconName, React.ComponentType<LucideProps>> = {
  stethoscope: Stethoscope,
  sparkles: Sparkles,
  smile: Smile,
  sun: Sun,
  align: AlignHorizontalDistributeCenter,
  implant: Anchor,
  crown: Crown,
  "heart-pulse": HeartPulse,
  shield: ShieldCheck,
  wrench: Wrench,
  siren: Siren,
};

export function ServiceIcon({ name, ...props }: { name: ServiceIconName } & LucideProps) {
  const Icon = icons[name] ?? Smile;
  return <Icon aria-hidden strokeWidth={1.6} {...props} />;
}
