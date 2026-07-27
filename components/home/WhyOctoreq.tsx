import Container from "../layout/Container";
import FeatureCard from "./FeatureCard";

const pillars = [
  {
    title: "One Integration",
    description:
      "Connect once to access payments, virtual accounts, wallets, payouts, and future commerce services through a unified platform.",
  },
  {
    title: "Built for Reliability",
    description:
      "Provider orchestration and intelligent routing help improve resilience while reducing operational complexity.",
  },
  {
    title: "Developer First",
    description:
      "Modern APIs, SDKs, webhooks, and documentation designed for fast integration and long-term maintainability.",
  },
  {
    title: "Designed to Scale",
    description:
      "From startups to enterprise platforms, OCTOREQ grows with your business without requiring major infrastructure changes.",
  },
  {
    title: "Enterprise Security",
    description:
      "Built with security, observability, auditability, and operational resilience as foundational principles.",
  },
  {
    title: "Commerce Infrastructure",
    description:
      "A unified platform that simplifies commerce operations while reducing the need to manage multiple provider integrations.",
  },
];

export default function WhyOctoreq() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#2AF371]">
            Why OCTOREQ
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Infrastructure that removes complexity.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Modern commerce shouldn't require managing multiple provider
            integrations, fragmented payment systems, and operational
            complexity. OCTOREQ unifies the infrastructure businesses and
            developers need into one consistent platform.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <FeatureCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}