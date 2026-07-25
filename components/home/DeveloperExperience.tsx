import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";
import Button from "../shared/Button";

export default function DeveloperExperience() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              badge="Developers"
              title="Built by developers, for developers."
              description="Integrate once and access payment orchestration, virtual accounts, wallets, settlements, webhooks, and more through a consistent API."
            />

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/developers">
                Explore APIs
              </Button>

              <Button href="/developers" variant="outline">
                Read Documentation
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 font-mono text-sm text-green-400 shadow-xl">
            <pre className="overflow-x-auto">
{`POST /v1/payments

{
  "amount": 5000,
  "currency": "NGN",
  "customer": {
    "email": "merchant@example.com"
  }
}`}
            </pre>
          </div>
        </div>
      </Container>
    </section>
  );
}