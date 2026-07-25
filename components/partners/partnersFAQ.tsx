import Container from "@/components/layout/Container";
import faq from "@/data/partners/faq";

export default function PartnerFAQ() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            Everything you need to know about becoming an OCTOREQ Merchant
            Partner.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <h3 className="mb-3 text-xl font-semibold text-white">
                {item.question}
              </h3>

              <p className="leading-8 text-gray-400">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}