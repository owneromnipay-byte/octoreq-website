"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  legalPolicies,
} from "@/data/legal/legalCenter";

interface LegalNavigationProps {
  currentSlug: string;
}

export default function LegalNavigation({
  currentSlug,
}: LegalNavigationProps) {
  const documents = [...legalPolicies].sort(
    (a, b) => a.order - b.order
  );

  const currentIndex = documents.findIndex(
    (doc) => doc.slug === currentSlug
  );

  const previous =
    currentIndex > 0
      ? documents[currentIndex - 1]
      : null;

  const next =
    currentIndex < documents.length - 1
      ? documents[currentIndex + 1]
      : null;

  return (
    <nav
      aria-label="Legal document navigation"
      className="grid gap-4 md:grid-cols-2"
    >
      {/* Previous */}
      <div>
        {previous && (
          <Link
            href={previous.href}
            className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ChevronLeft className="h-5 w-5 text-primary transition-transform group-hover:-translate-x-1" />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Previous Document
              </p>

              <p className="mt-1 font-semibold text-foreground">
                {previous.title}
              </p>
            </div>
          </Link>
        )}
      </div>

      {/* Next */}
      <div>
        {next && (
          <Link
            href={next.href}
            className="group flex h-full items-center justify-between rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
          >
            <div>
              <p className="text-right text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Next Document
              </p>

              <p className="mt-1 text-right font-semibold text-foreground">
                {next.title}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <ChevronRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}