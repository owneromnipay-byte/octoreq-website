import { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import apiTerms from "@/data/legal/apiTerms";

export const metadata: Metadata = {
  title: "API Terms of Use | OCTOREQ",
  description:
    "Terms governing access to and use of the OCTOREQ APIs, SDKs, webhooks, and developer platform.",
};

export default function ApiTermsPage() {
  return <LegalLayout
  document={apiTerms}
  currentSlug="apiTerms"
/>
}