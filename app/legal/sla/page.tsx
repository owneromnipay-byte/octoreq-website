import { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import sla from "@/data/legal/sla";

export const metadata: Metadata = {
  title: "Service Level Agreement | OCTOREQ",
  description:
    "Understand OCTOREQ's service availability objectives, maintenance practices, incident management, and support commitments.",
};

export default function ServiceLevelAgreementPage() {
  return <LegalLayout
   document={sla} 
   currentSlug="sla"
   />;
}