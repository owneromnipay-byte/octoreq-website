import { LegalDocument } from "@/types/legal";

import Container from "@/components/layout/Container";

import LegalBreadcrumb from "./LegalBreadcrumbs";
import LegalHeader from "./LegalHeader";
import LegalSidebar from "./LegalSidebar";
import LegalContent from "./LegalContent";
import LegalNavigation from "./LegalNavigation";
import TableOfContents from "./TableOfContents";

interface LegalLayoutProps {
  document: LegalDocument;
  currentSlug: string;
}

export default function LegalLayout({
  document,
  currentSlug,
}: LegalLayoutProps) {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        {/* Breadcrumb */}
        <LegalBreadcrumb document={document} />

        {/* Document Header */}
        <LegalHeader document={document} />

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-12 xl:grid-cols-[280px_minmax(0,1fr)_260px]">
          {/* Left Sidebar */}
          <aside className="hidden xl:block">
            <LegalSidebar />
          </aside>

          {/* Main Content */}
          <main
            className="min-w-0 max-w-3xl"
            aria-labelledby="legal-document-title"
          >
            <LegalContent document={document} />

            {/* Previous / Next Navigation */}
            <div className="mt-20 border-t border-border pt-10">
              <LegalNavigation currentSlug={currentSlug} />
            </div>
          </main>

          {/* Table of Contents */}
          <aside className="hidden xl:block">
            <TableOfContents document={document} />
          </aside>
        </div>
      </Container>
    </section>
  );
}