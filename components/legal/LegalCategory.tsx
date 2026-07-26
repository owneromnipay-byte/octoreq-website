import { LegalPolicy } from "@/data/legal/legalCenter";
import LegalPolicyCard from "./LegalPolicyCard";

interface Props {
  title: string;
  description: string;
  policies: LegalPolicy[];
}

export default function LegalCategory({
  title,
  description,
  policies,
}: Props) {
  const sortedPolicies = [...policies].sort(
    (a, b) => a.order - b.order
  );

  const sectionId = title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-");

  return (
    <section
      id={sectionId}
      className="py-16 scroll-mt-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>

          <p className="mt-3 leading-7 text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sortedPolicies.map((policy) => (
            <LegalPolicyCard
              key={policy.slug}
              policy={policy}
            />
          ))}
        </div>
      </div>
    </section>
  );
}