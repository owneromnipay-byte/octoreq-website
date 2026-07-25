import { LegalSection as LegalSectionType } from "@/types/legal";

interface LegalSectionProps {
  section: LegalSectionType;
}

export default function LegalSection({
  section,
}: LegalSectionProps) {
  return (
    <section
      id={section.id}
      className="scroll-mt-28 border-b border-white/10 pb-12 last:border-none"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">
        {section.title}
      </h2>

      <div className="space-y-5">
        {section.content.map((paragraph, index) => (
          <p
            key={index}
            className="leading-8 text-gray-300"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}