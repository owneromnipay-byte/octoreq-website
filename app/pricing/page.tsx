export default function Pricing() {
  return (
    <main className="min-h-screen bg-black text-white px-10 py-24">

      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-6xl font-bold">
          Pricing
        </h1>

        <p className="mt-8 text-xl text-gray-400">
          Flexible pricing designed for businesses of all sizes.
        </p>

      </div>

      <div className="max-w-3xl mx-auto mt-20 border border-slate-700 rounded-3xl p-12 bg-white/5">

        <h2 className="text-4xl font-bold">
          Custom Pricing
        </h2>

        <p className="mt-6 text-gray-300 leading-8">
          OCTOREQ offers tailored pricing based on transaction
          volume, infrastructure requirements, and business
          needs.
        </p>

        <div className="mt-10 space-y-4 text-gray-300">
          <p>• Payment Processing</p>
          <p>• Virtual Accounts</p>
          <p>• Merchant Wallets</p>
          <p>• Payout Infrastructure</p>
          <p>• API Access & Webhooks</p>
          <p>• Dedicated Support</p>
        </div>

        <div className="mt-10 p-6 rounded-2xl bg-[#24F76D]/10 border border-[#24F76D]/30">
          <p className="text-[#24F76D] font-semibold">
            Contact our team for a custom quote.
          </p>

          <p className="mt-2 text-gray-300">
            hello@octoreq.com
          </p>
        </div>

      </div>

    </main>
  );
}