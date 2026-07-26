import { Scale, Search } from "lucide-react";

export default function LegalCenterHero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-2 text-sm font-medium text-foreground">
          <Scale className="h-4 w-4" />
          Legal & Trust Center
        </div>

        {/* Heading */}
        <div className="mt-8 max-w-5xl">
          <h1 className="text-5xl font-semibold tracking-tight text-foreground md:text-6xl">
            Enterprise legal documentation built for trust.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
            Access OCTOREQ's legal policies, security commitments,
            compliance documentation, and developer agreements in one
            centralized location. Every document is maintained to support
            merchants, partners, developers, and enterprise customers.
          </p>
        </div>

        {/* Search */}
        <div className="mt-12 max-w-xl">
          <div className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition-colors hover:border-primary/30">
            <Search className="h-5 w-5 shrink-0 text-muted-foreground" />

            <input
              type="text"
              placeholder="Search legal documentation..."
              disabled
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"
            />
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            Full-text document search will be available in a future release.
          </p>
        </div>
      </div>
    </section>
  );
}