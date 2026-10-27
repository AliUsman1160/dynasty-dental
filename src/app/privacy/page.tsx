import { LegalPage } from "@/components/ui/LegalPage";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Privacy policy placeholder for Dynasty Dental Solutions.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" description="How personal information is handled will be described here." />;
}
