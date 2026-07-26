import LegalLayout from "@/components/legal/LegalLayout";
import terms from "@/data/legal/terms";

export default function TermsPage() {
  return <LegalLayout
   document={terms}
   currentSlug="terms"
   />;
}