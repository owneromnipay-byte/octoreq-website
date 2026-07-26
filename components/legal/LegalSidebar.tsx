"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { legalPolicies } from "@/data/legal/legalCenter";

const categories = [
  {
    id: "legal",
    title: "Legal",
  },
  {
    id: "security",
    title: "Security & Compliance",
  },
  {
    id: "developer",
    title: "Developers",
  },
] as const;

export default function LegalSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-24 self-start">
      <div className="rounded-2xl border border-border bg-card p-6">
        <Link
          href="/legal"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Legal Center
        </Link>

        <h2 className="mb-8 text-lg font-semibold">
          Legal Documentation
        </h2>

        <div className="space-y-8">
          {categories.map((category) => {
            const documents = legalPolicies.filter(
              (policy) => policy.category === category.id
            );

            if (documents.length === 0) return null;

            return (
              <div key={category.id}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {category.title}
                </h3>

                <nav className="space-y-1">
                  {documents.map((policy) => {
                    const Icon = policy.icon;

                    const active =
                      pathname === policy.href;

                    return (
                      <Link
                        key={policy.href}
                        href={policy.href}
                        className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                          active
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4 shrink-0" />

                        <span>{policy.title}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}