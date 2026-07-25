import LegalLayout from "@/components/legal/LegalLayout";
import privacy from "@/data/legal/privacy";

export default function PrivacyPage() {
  return <LegalLayout document={privacy} />;
}