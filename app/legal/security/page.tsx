import { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import security from "@/data/legal/security";

export const metadata: Metadata = {
  title: "Security | OCTOREQ",
  description:
    "Learn about OCTOREQ's security principles, infrastructure protection, encryption, monitoring, and incident response.",
};

export default function SecurityPage() {
  return <LegalLayout 
  document={security} 
  currentSlug="security"
  />;
}