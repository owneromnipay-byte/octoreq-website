import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-slate-900 text-white">
      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-10 py-8">
        <div>
          <Image
            src="/octoreq-logo.jpg"
            alt="OCTOREQ"
            width={180}
            height={60}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <div className="flex items-center gap-8 text-sm text-gray-300">
          <a href="#products">Products</a>
          <a href="#developers">Developers</a>
          <a href="/pricing">Pricing</a>
          <a href="#about">About</a>

          <a
            href="http://localhost:3001/login"
            className="rounded-xl border border-gray-700 px-5 py-2"
          >
            Login
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-10 pt-24 pb-32">
        <h1 className="text-6xl font-bold leading-tight max-w-5xl">
          The Operating System
          <br />
          for Commerce.
        </h1>

        <p className="mt-10 max-w-4xl text-xl text-gray-400 leading-relaxed">
          OCTOREQ provides payment infrastructure, virtual accounts,
          merchant wallets, payouts, and developer tools for modern
          businesses.
        </p>

        <div className="mt-8 text-gray-500 text-base tracking-wider">
    Payments • Wallets • Payouts • Infrastructure
</div>

<p className="mt-6 text-gray-500">
    Trusted infrastructure for modern commerce.
</p>

<p className="mt-2 text-gray-600">
    No hidden fees.
</p>

<div className="mt-10 flex gap-4">
          <a
            href="http://localhost:3001/signup"
            className="rounded-xl bg-[#2AF371] px-8 py-4 text-black font-semibold"
          >
            Get Started
          </a>

          <a
            href="http://localhost:3001/developers"
            className="rounded-xl border border-gray-700 px-8 py-4"
          >
            Developer Docs
          </a>
        </div>

        <p className="mt-8 text-gray-500">
          Trusted infrastructure for modern commerce.
        </p>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="max-w-7xl mx-auto px-10 py-20">
        <h2 className="text-5xl font-bold mb-12">
          Infrastructure
        </h2>

        <div className="grid grid-cols-2 gap-8 text-2xl">
          <p>Provider Failover</p>
          <p>Real-time Webhooks</p>
          <p>24/7 Monitoring</p>
          <p>Built for Scale</p>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-10 py-24"
      >
        <h2 className="text-5xl font-bold">
          Products
        </h2>

        <div className="grid grid-cols-3 gap-8 mt-12">
          <div className="p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold">
              Payments
            </h3>

            <p className="mt-4 text-gray-500">
              Accept payments through a unified API.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold">
              Virtual Accounts
            </h3>

            <p className="mt-4 text-gray-500">
              Generate dedicated virtual accounts for merchants.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold">
              Payouts
            </h3>

            <p className="mt-4 text-gray-500">
              Send payouts securely through connected providers.
            </p>
          </div>
        </div>
      </section>

      {/* DEVELOPERS */}
      <section
        id="developers"
        className="max-w-7xl mx-auto px-10 py-24"
      >
        <h2 className="text-5xl font-bold">
          Developers
        </h2>

        <p className="mt-8 max-w-3xl text-xl text-gray-400">
          Build with APIs, webhooks, and merchant infrastructure
          designed for modern businesses.
        </p>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-10 py-24"
      >
        <h2 className="text-5xl font-bold">
          About OCTOREQ
        </h2>

        <p className="mt-8 max-w-3xl text-xl text-gray-400 leading-relaxed">
          OCTOREQ is building payment infrastructure and commerce
          tools for modern businesses. Our mission is to simplify
          how merchants accept payments, manage wallets, and move
          money through a unified platform.
        </p>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-10 py-10">
          <h3 className="text-2xl font-bold">
            OCTOREQ
          </h3>

          <p className="mt-3 text-gray-500">
            The Operating System for Commerce.
          </p>

          <p className="mt-6 text-gray-600">
            © 2026 OCTOREQ Technologies Limited.
          </p>
        </div>
      </footer>
    </main>
  );
}