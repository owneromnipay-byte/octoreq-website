import { LegalDocument } from "@/types/legal";

interface TableOfContentsProps {
  document: LegalDocument;
}

export default function TableOfContents({
  document,
}: TableOfContentsProps) {
  return (
    <aside className="sticky top-24 hidden xl:block self-start">
      <div className="w-72 rounded-2xl border border-border bg-card p-6">
        <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          On This Page
        </h3>

        <nav
          className="max-h-[calc(100vh-10rem)] space-y-1 overflow-y-auto pr-2"
          aria-label="Table of contents"
        >
          {document.sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="group flex items-start gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground"
            >
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-border transition-colors group-hover:bg-primary" />

              <span className="leading-5">
                {section.title}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}