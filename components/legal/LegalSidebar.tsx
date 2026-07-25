import Link from "next/link";

const documents = [
  {
    title: "Terms of Service",
    href: "/legal/terms",
  },
  {
    title: "Privacy Policy",
    href: "/legal/privacy",
  },
  {
    title: "Merchant Agreement",
    href: "/legal/merchant-agreement",
  },
  {
    title: "Acceptable Use",
    href: "/legal/acceptable-use",
  },
  {
    title: "Cookie Policy",
    href: "/legal/cookies",
  },
  {
    title: "Compliance",
    href: "/legal/compliance",
  },
];

export default function LegalSidebar() {
  return (
    <aside className="sticky top-24 w-72 self-start">
      <h2 className="mb-6 text-lg font-semibold text-white">
        Legal Center
      </h2>

      <nav className="space-y-2">
        {documents.map((doc) => (
          <Link
            key={doc.href}
            href={doc.href}
            className="block rounded-lg px-4 py-3 text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            {doc.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}