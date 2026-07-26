import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Scale,
  LifeBuoy,
} from "lucide-react";

const contacts = [
  {
    title: "General Legal",
    description:
      "Questions about our policies, agreements, or legal documentation.",
    href: "/contact",
    icon: Scale,
  },
  {
    title: "Security",
    description:
      "Report security concerns or discuss security-related matters.",
    href: "/contact",
    icon: Shield,
  },
  {
    title: "Support",
    description:
      "Need help understanding how our platform or documentation works?",
    href: "/contact",
    icon: LifeBuoy,
  },
];

export default function LegalContact() {
  return (
    <section className="border-t border-border bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground">
            Need additional assistance?
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            If you have questions about OCTOREQ's legal documentation,
            security practices, or compliance commitments, our team is
            available to help.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <Link
                key={contact.title}
                href={contact.href}
                className="group rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  {contact.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {contact.description}
                </p>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Contact Team

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}