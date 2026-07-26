import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LegalPolicy } from "@/data/legal/legalCenter";

interface Props {
  policy: LegalPolicy;
}

export default function LegalPolicyCard({
  policy,
}: Props) {
  const Icon = policy.icon;

  return (
    <Link
      href={policy.href}
      aria-label={`Read ${policy.title}`}
      className="group flex h-full flex-col rounded-2xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
    >
      {/* Icon */}
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {policy.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {policy.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
        <span className="text-sm font-medium text-primary">
          Read Document
        </span>

        <ArrowRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}