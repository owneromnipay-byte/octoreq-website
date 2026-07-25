import { LegalDocument } from "@/types/legal";
import LegalSection from "./LegalSection";

interface LegalContentProps {
  document: LegalDocument;
}

export default function LegalContent({
  document,
}: LegalContentProps) {
  return (
    <div className="space-y-16">
      {document.sections.map((section) => (
        <LegalSection
          key={section.id}
          section={section}
        />
      ))}
    </div>
  );
}