interface LegalStatsProps {
  totalPolicies: number;
}

export default function LegalStats({
  totalPolicies,
}: LegalStatsProps) {
  const stats = [
    {
      value: totalPolicies.toString(),
      label: "Official Policies",
    },
    {
      value: "Enterprise",
      label: "Documentation Standard",
    },
    {
      value: "July 2026",
      label: "Last Updated",
    },
  ];

  return (
    <section className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-background p-8 transition-colors hover:border-primary/30"
            >
              <h2 className="text-4xl font-semibold tracking-tight text-foreground">
                {stat.value}
              </h2>

              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}