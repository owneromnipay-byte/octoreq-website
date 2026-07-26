import { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import partnerAgreement from "@/data/legal/partnerAgreement";

export const metadata: Metadata = {
  title: "Partner Program Agreement | OCTOREQ",
  description:
    "Terms governing participation in the OCTOREQ Partner Program, including referrals, commissions, and responsibilities.",
};

export default function PartnerAgreementPage() {
  return <LegalLayout 
  document={partnerAgreement} 
  currentSlug="partnerAgreement"
  />;
}