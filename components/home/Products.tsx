import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";

const products = [
  {
    title: "Payment Orchestration",
    description:
      "Automatically route every transaction through the best-performing payment provider for higher success rates.",
  },
  {
    title: "Virtual Accounts",
    description:
      "Generate dedicated bank accounts instantly for collections, deposits, and merchant reconciliation.",
  },
  {
    title: "Merchant Wallets",
    description:
      "Maintain real-time balances, automate settlements, and track every movement with a complete ledger.",
  },
  {
    title: "Checkout",
    description:
      "Accept cards, bank transfers, QR payments, USSD, and additional payment methods through a unified checkout.",
  },
  {
    title: "Payouts",
    description:
      "Transfer funds to bank accounts quickly with automated payout scheduling and tracking.",
  },
  {
    title: "Analytics",
    description:
      "Monitor transaction volume, settlement reports, provider performance, and business growth from one dashboard.",
  },
];

export default function Products() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Products"
          title="Everything you need to run modern payments."
          description="A complete suite of payment infrastructure designed to help businesses collect, manage, and move money with confidence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-yellow-500/30 hover:bg-white/10 hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold text-white">
                {product.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}