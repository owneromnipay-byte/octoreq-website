import { LegalDocument } from "@/types/legal";

import Container from "@/components/layout/Container";

import LegalSidebar from "./LegalSidebar";
import LegalContent from "./LegalContent";
import TableOfContents from "./TableOfContents";

interface LegalLayoutProps {
  document: LegalDocument;
}

export default function LegalLayout({
  document,
}: LegalLayoutProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-yellow-500">
            Legal
          </p>

          <h1 className="mb-6 text-5xl font-bold text-white">
            {document.title}
          </h1>

          <p className="text-lg leading-8 text-gray-400">
            {document.description}
          </p>

          <p className="mt-6 text-sm text-gray-500">
            Last Updated: {document.lastUpdated}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[280px_minmax(0,1fr)_240px]">
          <LegalSidebar />

          <main className="max-w-3xl">
            <LegalContent document={document} />
          </main>

          <TableOfContents document={document} />
        </div>
      </Container>
    </section>
  );
}