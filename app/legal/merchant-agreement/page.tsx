import LegalLayout from "@/components/legal/LegalLayout";
import merchantAgreement from "@/data/legal/merchantAgreement";

export default function MerchantAgreementPage() {
  return <LegalLayout document={merchantAgreement} />;
}