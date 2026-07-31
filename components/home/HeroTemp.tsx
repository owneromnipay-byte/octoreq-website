import Link from "next/link";
import Container from "../layout/Container";

const hero = {
  title: "The Operating System for Commerce.",
  description:
    "Build, accept, orchestrate, and scale commerce through one unified infrastructure. OCTOREQ connects businesses and developers to payments, virtual accounts, wallets, payouts, and APIs through a single integration.",

  primaryCTA: {
    label: "Get Started",
    href: "https://portal.octoreq.com/signup",
  },

  secondaryCTA: {
    label: "Developer Docs",
    href: "https://docs.octoreq.com",
  },

  highlights: [
    "Payment Orchestration",
    "Merchant Infrastructure",
    "Developer APIs",
    "Enterprise Ready",
  ],
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-36">
      {/* Background Accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#2AF371]/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center rounded-full border border-[#2AF371]/20 bg-[#2AF371]/5 px-4 py-2 text-sm font-medium text-[#2AF371]">
              Unified Commerce Infrastructure
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              {hero.title}
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-300 lg:text-xl">
              {hero.description}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href={hero.primaryCTA.href}
                className="rounded-xl bg-[#2AF371] px-8 py-4 text-center font-semibold text-black transition-all duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AF371]"
              >
                {hero.primaryCTA.label}
              </Link>

              <Link
                href={hero.secondaryCTA.href}
                className="rounded-xl border border-gray-700 px-8 py-4 text-center font-semibold text-white transition-all duration-200 hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AF371]"
              >
                {hero.secondaryCTA.label}
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {hero.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-neutral-900 to-black p-6 shadow-2xl">
              <div className="rounded-2xl border border-white/10 bg-neutral-950 p-6">
                {/* Window Controls */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[#2AF371]">
                      Commerce Infrastructure
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      One Platform. Multiple Services.
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Payments",
                      "Virtual Accounts",
                      "Merchant Wallets",
                      "Payouts",
                      "Developer APIs",
                      "Analytics",
                    ].map((feature) => (
                      <div
                        key={feature}
                        className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                      >
                        <p className="text-sm font-medium text-white">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl border border-[#2AF371]/20 bg-[#2AF371]/5 p-5">
                    <p className="text-sm text-gray-300">
                      A single integration that connects your business to the
                      payment services you need—without managing multiple
                      provider integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}