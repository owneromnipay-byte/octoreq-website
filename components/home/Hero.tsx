import Link from "next/link";
import Container from "../layout/Container";

const hero = {
  title: "The Operating System for Commerce.",
  description:
    "OCTOREQ provides payment infrastructure, virtual accounts, merchant wallets, payouts, and developer tools for modern businesses.",
};

export default function Hero() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="https://portal.octoreq.com/signup"
                className="rounded-xl bg-[#2AF371] px-8 py-4 text-center font-semibold text-black transition hover:opacity-90"
              >
                Get Started
              </Link>

              <Link
                href="/developers"
                className="rounded-xl border border-gray-700 px-8 py-4 text-center transition hover:border-gray-500"
              >
                Developer Docs
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-500">
              <span>Payments</span>
              <span>•</span>
              <span>Wallets</span>
              <span>•</span>
              <span>Virtual Accounts</span>
              <span>•</span>
              <span>Payouts</span>
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl border border-gray-800 bg-neutral-950 p-8">
            <div className="aspect-[4/3] rounded-2xl border border-gray-800 bg-gradient-to-br from-neutral-900 to-black flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg font-semibold text-white">
                  OCTOREQ Dashboard
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  Product preview coming soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
    </section>
  );
}