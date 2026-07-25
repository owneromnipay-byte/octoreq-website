import Container from "@/components/layout/Container";

const steps = [
  "Apply",
  "Application Review",
  "Approval",
  "Partner Dashboard",
  "Refer Merchants",
  "Track Performance",
  "Earn Commissions",
];

export default function PartnerProcess() {
  return (
    <section className="py-24 border-t border-white/10">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            How the Partner Program Works
          </h2>

          <p className="text-lg text-gray-400 leading-8">
            Getting started is straightforward. Once approved, you'll receive
            access to your dedicated partner portal where you can manage
            referrals and monitor performance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500 font-bold text-black">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-white">{step}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}