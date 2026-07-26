import { LegalDocument } from "@/types/legal";
import {
  Calendar,
  Clock3,
  FileText,
  ShieldCheck,
} from "lucide-react";

interface LegalHeaderProps {
  document: LegalDocument;
}

export default function LegalHeader({
  document,
}: LegalHeaderProps) {
  const readingTime = Math.max(
    3,
    Math.ceil(document.sections.length * 1.5)
  );

  const metadata = [
    {
      icon: FileText,
      label: "Version",
      value: document.version,
    },
    {
      icon: Calendar,
      label: "Effective",
      value: document.effectiveDate,
    },
    {
      icon: Calendar,
      label: "Last Updated",
      value: document.lastUpdated,
    },
    {
      icon: Clock3,
      label: "Reading Time",
      value: `${readingTime} min`,
    },
  ];

  return (
    <header className="mb-16 border-b border-border pb-12">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        <ShieldCheck className="h-4 w-4" />
        Official OCTOREQ Legal Document
      </div>

      {/* Title */}
      <h1
        id="legal-document-title"
        className="mt-8 max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl"
      >
        {document.title}
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
        {document.description}
      </p>

      {/* Metadata */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metadata.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-xl border border-border bg-muted/20 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>

                <p className="mt-1 font-semibold text-foreground">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
}