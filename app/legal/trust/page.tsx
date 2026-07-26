import { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import trust from "@/data/legal/trust";

export const metadata: Metadata = {
  title: "Trust Center | OCTOREQ",
  description:
    "Discover OCTOREQ's commitments to security, privacy, compliance, reliability, and operational excellence.",
};

export default function TrustCenterPage() {
  return <LegalLayout
   document={trust}
   currentSlug="trust"
   />;
}