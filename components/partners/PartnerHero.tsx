import Link from "next/link";

import Container from "@/components/layout/Container";
import Button from "@/components/shared/Button";

import program from "@/data/partners/program";

export default function PartnerHero() {
  return (
    <section className="relative overflow-hidden py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-500">
            {program.subtitle}
          </p>

          <h1 className="mb-8 text-5xl font-bold leading-tight text-white md:text-6xl">
            {program.title}
          </h1>

          <p className="mx-auto mb-12 max-w-3xl text-xl leading-9 text-gray-400">
            {program.description}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={program.applyUrl}>
              Become a Partner
            </Button>

            <Link
              href="#benefits"
              className="rounded-xl border border-white/10 px-8 py-4 font-medium text-white transition hover:border-yellow-500"
            >
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}