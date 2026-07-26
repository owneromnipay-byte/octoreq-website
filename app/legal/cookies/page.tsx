import LegalLayout from "@/components/legal/LegalLayout";
import cookies from "@/data/legal/cookies";

export default function CookiePolicyPage() {
  return <LegalLayout
   document={cookies} 
   currentSlug="cookies"/>;
}