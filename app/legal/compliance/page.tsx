import LegalLayout from "@/components/legal/LegalLayout";
import compliance from "@/data/legal/compliance";

export default function CompliancePage() {
  return <LegalLayout 
  document={compliance} 
  currentSlug="compliance"/>;
}