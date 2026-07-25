import Container from "@/components/layout/Container";

import benefits from "@/data/partners/benefits";

import PartnerBenefitCard from "./PartnerBenefitCard";

export default function PartnerBenefits() {
  return (
    <section
      id="benefits"
      className="py-24"
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Why Partner With OCTOREQ?
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            Join a growing ecosystem designed to help you
            introduce merchants while building long-term,
            recurring business opportunities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <PartnerBenefitCard
              key={benefit.title}
              benefit={benefit}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}