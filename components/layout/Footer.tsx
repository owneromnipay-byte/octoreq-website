import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-24">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white">
              OCTOREQ
            </h2>

            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              The Operating System for Commerce.
              Payment infrastructure built for modern businesses.
            </p>

            <p className="mt-8 text-sm text-gray-500">
              © 2026 OCTOREQ Technologies Limited.
              All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <ul className="mt-4 space-y-3 text-gray-400">
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/legal">Legal</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white">Products</h3>

            <ul className="mt-4 space-y-3 text-gray-400">
              <li>Payments</li>
              <li>Wallets</li>
              <li>Virtual Accounts</li>
              <li>Payouts</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white">Resources</h3>

            <ul className="mt-4 space-y-3 text-gray-400">
              <li><Link href="/developers">Developers</Link></li>
              <li><Link href="/legal/terms">Terms</Link></li>
              <li><Link href="/legal/privacy">Privacy</Link></li>
              <li><Link href="/legal/cookies">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}