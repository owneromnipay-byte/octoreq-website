import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";

const products = [
  {
    title: "Payment Orchestration",
    description:
      "Route transactions across connected payment providers through a single integration designed for reliability, flexibility, and operational control.",
  },
  {
    title: "Virtual Account Infrastructure",
    description:
      "Provision virtual account capabilities through integrated providers while managing collections through one unified platform.",
  },
  {
    title: "Merchant Wallet Infrastructure",
    description:
      "Manage merchant balances, transaction records, and wallet operations with a unified ledger architecture.",
  },
  {
    title: "Unified Checkout",
    description:
      "Accept multiple payment methods through one consistent checkout experience without maintaining separate integrations.",
  },
  {
    title: "Payout Orchestration",
    description:
      "Coordinate payout workflows across connected providers with configurable routing, scheduling, and operational visibility.",
  },
  {
    title: "Commerce Analytics",
    description:
      "Monitor transactions, provider performance, reconciliation activity, and operational insights from a unified dashboard.",
  },
];

export default function Products() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Platform"
          title="A unified platform for modern commerce."
          description="OCTOREQ brings together the infrastructure businesses need to accept payments, manage commerce operations, and build scalable financial experiences through a single integration."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="rounded-2xl border border-white/10 bg-neutral-950 p-8 transition-all duration-300 hover:border-[#2AF371]/30 hover:bg-neutral-900"
            >
              <h3 className="text-lg font-semibold tracking-tight text-white">
                {product.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}