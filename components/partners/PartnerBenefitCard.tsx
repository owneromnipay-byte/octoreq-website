import { PartnerBenefit } from "@/types/partner";

interface PartnerBenefitCardProps {
  benefit: PartnerBenefit;
}

export default function PartnerBenefitCard({
  benefit,
}: PartnerBenefitCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-500 hover:bg-white/10">
      <div className="mb-6 text-4xl">
        {benefit.icon}
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-white">
        {benefit.title}
      </h3>

      <p className="leading-8 text-gray-400">
        {benefit.description}
      </p>
    </div>
  );
}