import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";

const capabilities = [
  {
    title: "Provider Resilience",
    description:
      "Automatic failover and configurable routing help maintain service continuity when provider conditions change.",
  },
  {
    title: "Secure Communication",
    description:
      "Encrypted connections and webhook signature verification help protect data exchanged across integrations.",
  },
  {
    title: "Operational Visibility",
    description:
      "Monitor transaction activity, provider performance, and platform events through centralized observability.",
  },
  {
    title: "Audit Logging",
    description:
      "Comprehensive event logs improve traceability for operational reviews and troubleshooting.",
  },
  {
    title: "Webhook Reliability",
    description:
      "Consistent event delivery with retry mechanisms helps applications stay synchronized.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Infrastructure designed to support growing transaction volumes without increasing integration complexity.",
  },
];

export default function Security() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Security & Reliability"
          title="Built for resilient commerce operations."
          description="From intelligent provider routing to operational visibility, OCTOREQ is designed to help businesses run reliable commerce infrastructure with confidence."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-neutral-950 p-8 transition-all duration-300 hover:border-[#2AF371]/30 hover:bg-neutral-900"
            >
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}