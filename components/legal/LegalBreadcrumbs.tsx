import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { LegalDocument } from "@/types/legal";

interface LegalBreadcrumbProps {
  document: LegalDocument;
}

export default function LegalBreadcrumb({
  document,
}: LegalBreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-500"
    >
      <Link
        href="/"
        className="flex items-center gap-1 transition-colors hover:text-white"
      >
        <Home className="h-4 w-4" />
        Home
      </Link>

      <ChevronRight className="h-4 w-4" />

      <Link
        href="/legal"
        className="transition-colors hover:text-white"
      >
        Legal
      </Link>

      <ChevronRight className="h-4 w-4" />

      <span className="font-medium text-gray-300">
        {document.title}
      </span>
    </nav>
  );
}