import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";

const features = [
  "Provider failover",
  "Encrypted transactions",
  "Real-time monitoring",
  "Webhook verification",
  "Fraud detection",
  "Audit logs",
];

export default function Security() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Security"
          title="Security and reliability built into every transaction."
          description="OCTOREQ is designed with resilience, observability, and operational transparency at its core."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-lg font-medium text-white"
            >
              ✓ {feature}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}