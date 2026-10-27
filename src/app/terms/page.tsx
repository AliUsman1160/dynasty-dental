import { LegalPage } from "@/components/ui/LegalPage";
import { pageMetadata } from "@/lib/utils";

export const metadata = pageMetadata({
  title: "Terms and Conditions",
  description: "Terms and conditions placeholder for Dynasty Dental Solutions.",
  path: "/terms",
});

export default function TermsPage() {
  return <LegalPage title="Terms and Conditions" description="The terms of use for this website will be described here." />;
}
