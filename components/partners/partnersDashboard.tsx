import Container from "@/components/layout/Container";
import Button from "@/components/shared/Button";

import program from "@/data/partners/program";

const features = [
  "Merchant Overview",
  "Referral Tracking",
  "Commission Reports",
  "Performance Analytics",
  "Partner Resources",
  "Support Center",
];

export default function PartnerDashboard() {
  return (
    <section className="py-24 border-t border-white/10">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold text-white">
              Everything You Need in One Dashboard
            </h2>

            <p className="mb-10 text-lg leading-8 text-gray-400">
              Manage referrals, monitor merchant activity, review commissions,
              and access resources from your dedicated Partner Portal.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="text-white">
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href={program.applyUrl}>
                Access Partner Portal
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <div className="space-y-4">
              <div className="h-12 rounded-lg bg-white/10" />
              <div className="h-32 rounded-lg bg-white/10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 rounded-lg bg-white/10" />
                <div className="h-24 rounded-lg bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}