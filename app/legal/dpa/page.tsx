import { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import dpa from "@/data/legal/dpa";

export const metadata: Metadata = {
  title: "Data Processing Agreement | OCTOREQ",
  description:
    "Learn how OCTOREQ processes and protects personal data on behalf of customers.",
};

export default function DataProcessingAgreementPage() {
  return <LegalLayout
   document={dpa}
   currentSlug="dpa" />;
}