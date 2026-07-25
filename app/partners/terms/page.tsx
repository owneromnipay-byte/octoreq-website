import LegalLayout from "@/components/legal/LegalLayout";
import partnerTerms from "@/data/partners/terms";

export default function PartnerTermsPage() {
  return <LegalLayout document={partnerTerms} />;
}