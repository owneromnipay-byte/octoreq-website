import Container from "../layout/Container";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "Unified Payments",
    description:
      "Accept payments through a single API across multiple providers.",
  },
  {
    title: "Virtual Accounts",
    description:
      "Generate dedicated virtual accounts for merchants instantly.",
  },
  {
    title: "Merchant Wallets",
    description:
      "Manage balances, settlements, and payouts from one place.",
  },
  {
    title: "Provider Failover",
    description:
      "Automatically switch providers to improve payment reliability.",
  },
  {
    title: "Developer First",
    description:
      "Modern APIs, webhooks, and documentation built for fast integration.",
  },
  {
    title: "Built for Scale",
    description:
      "Infrastructure designed to support businesses as they grow.",
  },
];

export default function WhyOctoreq() {
  return (
    <section className="py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.2em] text-[#2AF371]">
            Why OCTOREQ
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Everything your business needs to move money.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            From accepting payments to managing settlements and payouts,
            OCTOREQ provides a unified commerce infrastructure through a
            single platform.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
  <FeatureCard
    key={feature.title}
    title={feature.title}
    description={feature.description}
  />
))}
        </div>
      </Container>
    </section>
  );
}