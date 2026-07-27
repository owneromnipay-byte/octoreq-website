import Link from "next/link";
import Container from "./Container";
import Button from "../shared/Button";

const platformLinks = [
  { name: "Payment Orchestration", href: "/products" },
  { name: "Checkout", href: "/products" },
  { name: "Wallet Infrastructure", href: "/products" },
  { name: "Virtual Accounts", href: "/products" },
  { name: "Payout Orchestration", href: "/products" },
];

const developerLinks = [
  { name: "Documentation", href: "/developers" },
  { name: "API Reference", href: "/developers" },
  { name: "Guides", href: "/developers" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Partners", href: "/partners" },
  { name: "Contact", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy", href: "/legal/privacy" },
  { name: "Terms", href: "/legal/terms" },
  { name: "Cookies", href: "/legal/cookies" },
];

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/octoreqhq?s=11",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/octoreq",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/octoreqhq?igsh=MWRxbmRleTNxd2IxdA%3D%3D&utm_source=qr",
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black">
      <Container className="py-20">
        {/* Top Section */}
        <div className="grid gap-16 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              OCTOREQ
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-300">
              The Operating System for Commerce.
              <br />
              <br />
              Unified commerce infrastructure that helps businesses
              accept payments, orchestrate financial operations,
              and scale through a single integration.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/signup">
                Get Started
              </Button>

              <Button
                href="/developers"
                variant="outline"
              >
                Developer Docs
              </Button>
            </div>
          </div>

          {/* Platform */}
          <FooterColumn
            title="Platform"
            links={platformLinks}
          />

          {/* Developers */}
          <FooterColumn
            title="Developers"
            links={developerLinks}
          />

          {/* Company */}
          <FooterColumn
            title="Company"
            links={companyLinks}
          />

          {/* Legal */}
          <FooterColumn
            title="Legal"
            links={legalLinks}
          />
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-500">
            © 2026 OCTOREQ Technologies Limited. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit OCTOREQ on ${link.name}`}
                className="text-sm text-gray-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
        {title}
      </h3>

      <ul className="mt-6 space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-gray-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}