import PartnerFAQ from "@/components/partners/partnersFAQ";

export default function PartnerFAQPage() {
  return (
    <main className="bg-black">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-400">
            OCTOREQ Partner Program
          </span>

          <h1 className="mt-8 text-5xl font-bold text-white">
            Frequently Asked Questions
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Learn more about the OCTOREQ Partner Program, including eligibility,
            referrals, commissions, payouts, approval, and account management.
          </p>
        </div>
      </section>

      <PartnerFAQ />
    </main>
  );
}