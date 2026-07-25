import { LegalDocument } from "@/types/legal";

interface TableOfContentsProps {
  document: LegalDocument;
}

export default function TableOfContents({
  document,
}: TableOfContentsProps) {
  return (
    <aside className="sticky top-24 hidden xl:block w-64">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-400">
        On this page
      </h3>

      <nav className="space-y-3">
        {document.sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="block text-sm text-gray-400 transition hover:text-white"
          >
            {section.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}