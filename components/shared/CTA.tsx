import Container from "../layout/Container";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="py-24">
      <Container>
        <div className="rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 to-transparent p-12 text-center">
          <h2 className="text-4xl font-bold text-white">
            Ready to build with OCTOREQ?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Accept payments, automate settlements, and scale your business with
            a single payment operating system.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/signup" size="lg">
              Get Started
            </Button>

            <Button href="/developers" variant="outline" size="lg">
              View Documentation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}