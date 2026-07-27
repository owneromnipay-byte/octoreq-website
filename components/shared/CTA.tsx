import Container from "../layout/Container";
import Button from "./Button";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-neutral-950 p-12 text-center shadow-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
            Build the future of commerce with one platform.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Bring together payment orchestration, merchant infrastructure, and
            developer tools through a single integration designed for modern
            businesses.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/signup" size="lg">
              Get Started
            </Button>

            <Button
              href="/developers"
              variant="outline"
              size="lg"
            >
              Explore Documentation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}