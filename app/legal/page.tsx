import Link from "next/link";

import Container from "@/components/layout/Container";

const documents = [
  {
    title: "Terms of Service",
    description: "Rules governing your use of OCTOREQ.",
    href: "/legal/terms",
  },
  {
    title: "Privacy Policy",
    description: "How we collect and protect your information.",
    href: "/legal/privacy",
  },
  {
    title: "Merchant Agreement",
    description: "Terms applicable to OCTOREQ merchants.",
    href: "/legal/merchant-agreement",
  },
  {
    title: "Acceptable Use Policy",
    description: "Guidelines for responsible platform usage.",
    href: "/legal/acceptable-use",
  },
  {
    title: "Cookie Policy",
    description: "How cookies are used across our platform.",
    href: "/legal/cookies",
  },
  {
    title: "Compliance",
    description: "AML, KYC, fraud prevention, and regulatory compliance.",
    href: "/legal/compliance",
  },
];

export default function LegalCenterPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Legal Center
          </p>

          <h1 className="mb-6 text-5xl font-bold text-white">
            Legal Documentation
          </h1>

          <p className="text-lg leading-8 text-gray-400">
            Everything you need to know about using OCTOREQ,
            our payment infrastructure, security practices,
            merchant obligations, and compliance standards.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {documents.map((doc) => (
            <Link
              key={doc.href}
              href={doc.href}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:border-yellow-500 hover:bg-white/10"
            >
              <h2 className="mb-4 text-2xl font-semibold text-white">
                {doc.title}
              </h2>

              <p className="mb-8 leading-7 text-gray-400">
                {doc.description}
              </p>

              <span className="font-medium text-yellow-500">
                Read Document →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}