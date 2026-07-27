import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Customer Initiates Payment",
    description:
      "Customers complete checkout using supported payment methods through your existing commerce experience.",
  },
  {
    step: "02",
    title: "OCTOREQ Orchestrates",
    description:
      "The platform intelligently routes requests based on provider availability, routing rules, and operational health.",
  },
  {
    step: "03",
    title: "Real-Time Processing",
    description:
      "Webhooks, notifications, ledger updates, and transaction events are synchronized across your integration.",
  },
  {
    step: "04",
    title: "Reconciliation & Settlement",
    description:
      "Transaction records are reconciled while settlement processes are orchestrated through your connected payment providers.",
  },
];

export default function MerchantJourney() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <SectionHeading
          badge="Merchant Journey"
          title="Commerce infrastructure working behind every transaction."
          description="From checkout to reconciliation, OCTOREQ simplifies the operational complexity behind modern commerce through one unified platform."
        />

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.step}
              className="rounded-2xl border border-white/10 bg-neutral-950 p-8 transition-all duration-300 hover:border-[#2AF371]/30 hover:bg-neutral-900"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#2AF371]/20 bg-[#2AF371]/10 text-sm font-semibold text-[#2AF371]">
                {step.step}
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-white">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}