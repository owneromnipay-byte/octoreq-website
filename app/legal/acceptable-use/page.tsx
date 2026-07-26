import LegalLayout from "@/components/legal/LegalLayout";
import acceptableUse from "@/data/legal/acceptableUse";

export default function AcceptableUsePage() {
  return <LegalLayout
   document={acceptableUse}
    currentSlug="acceptableUse" />;
}