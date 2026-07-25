import Link from "next/link";

import {
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Code2,
  Globe,
  Users,
} from "lucide-react";

export default function PartnerApplyPage() {
  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="border-b">
        <div className="container mx-auto max-w-6xl px-6 py-24">
          <span className="rounded-full border px-4 py-2 text-sm font-medium">
            OCTOREQ Partner Program
          </span>

          <h1 className="mt-8 max-w-3xl text-5xl font-bold tracking-tight">
            Become an OCTOREQ Partner
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            Grow your business by introducing merchants to OCTOREQ's modern
            payment infrastructure. Earn recurring commissions, access
            dedicated partner resources, and help businesses simplify how they
            accept and manage payments.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
  <a
    href="https://partners.octoreq.com/signup"
    className="rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground"
  >
    Create Partner Account
  </a>

  <p className="text-sm text-muted-foreground">
    Already have an account?{" "}
    <a
      href="https://partners.octoreq.com/login"
      className="font-medium text-primary hover:underline"
    >
      Sign in
    </a>
  </p>

  <Link
    href="/contact"
    className="rounded-lg border px-6 py-3 font-medium"
  >
    Contact Partnerships
  </Link>
</div>
        </div>
      </section>

      {/* Who Should Apply */}
      <section className="container mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">
            Who Should Apply?
          </h2>

          <p className="mt-4 text-muted-foreground">
            The OCTOREQ Partner Program is designed for professionals and
            organizations that help businesses grow through technology,
            commerce, and digital transformation.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Building2,
              title: "Digital Agencies",
              desc: "Help clients adopt modern payment infrastructure while earning recurring commissions.",
            },
            {
              icon: Code2,
              title: "Software Companies",
              desc: "Integrate OCTOREQ into your ecosystem and create additional value for customers.",
            },
            {
              icon: Briefcase,
              title: "Consultants",
              desc: "Recommend trusted payment solutions to merchants you advise.",
            },
            {
              icon: Globe,
              title: "Technology Partners",
              desc: "Collaborate with OCTOREQ to build complementary commerce solutions.",
            },
            {
              icon: Users,
              title: "System Integrators",
              desc: "Deliver payment infrastructure alongside your implementation services.",
            },
            {
              icon: CheckCircle2,
              title: "Independent Professionals",
              desc: "Refer businesses that can benefit from OCTOREQ's payment platform.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border p-6">
              <item.icon className="mb-4 h-10 w-10" />

              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto max-w-6xl px-6 py-24">
          <h2 className="text-3xl font-bold">
            How It Works
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Submit your application",
              "Application review",
              "Get approved",
              "Start referring merchants",
            ].map((step, index) => (
              <div key={step}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {index + 1}
                </div>

                <h3 className="font-semibold">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Partner with OCTOREQ?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
          Join agencies, consultants, technology companies, and professionals
          helping businesses modernize commerce through OCTOREQ.
        </p>

        <Link
          href="https://partners.octoreq.com"
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-semibold text-primary-foreground"
        >
          Apply Now
          <ArrowRight className="h-5 w-5" />
        </Link>
      </section>
    </main>
  );
}