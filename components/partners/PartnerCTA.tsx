import Button from "@/components/shared/Button";
import Container from "@/components/layout/Container";

import program from "@/data/partners/program";

export default function PartnerCTA() {
  return (
    <section className="py-28">
      <Container>
        <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-transparent p-12 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Grow With OCTOREQ?
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-gray-400">
            Join our Merchant Partner Program and help businesses access modern
            commerce infrastructure while building a recurring revenue stream.
          </p>

          <Button href={program.applyUrl}>
            Become a Partner
          </Button>
        </div>
      </Container>
    </section>
  );
}