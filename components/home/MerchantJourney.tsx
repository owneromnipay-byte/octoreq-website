import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";

const steps = [
  {
    title: "Customer Pays",
    description:
      "Customers pay using cards, bank transfers, wallets, QR codes, or other supported payment methods.",
  },
  {
    title: "OCTOREQ Routes",
    description:
      "Our orchestration engine automatically routes each payment to the best-performing provider.",
  },
  {
    title: "Payment Confirmed",
    description:
      "Real-time webhooks, ledger updates, notifications, and reconciliation happen instantly.",
  },
  {
    title: "Settlement",
    description:
      "Funds are automatically reconciled and prepared for merchant settlement according to schedule.",
  },
];

export default function MerchantJourney() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Merchant Journey"
          title="Every payment follows an intelligent workflow."
          description="From checkout to settlement, OCTOREQ automates every step of the payment lifecycle."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-500/30 hover:bg-white/10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500 text-lg font-bold text-black">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}