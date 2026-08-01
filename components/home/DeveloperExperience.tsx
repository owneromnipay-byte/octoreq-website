import Container from "../layout/Container";
import SectionHeading from "../shared/SectionHeading";
import Button from "../shared/Button";

const developerFeatures = [
  "RESTful APIs",
  "Webhook Events",
  "Typed SDKs",
  "Versioned Endpoints",
];

export default function DeveloperExperience() {
  return (
    <section className="py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}
          <div>
            <SectionHeading
              align="left"
              badge="Developers"
              title="Infrastructure your engineering team will enjoy building with."
              description="Well-documented APIs, consistent responses, webhook events, and developer tooling designed to simplify commerce integrations without unnecessary complexity."
            />

            <div className="mt-10 flex flex-wrap gap-3">
              {developerFeatures.map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {feature}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="https://docs.octoreq.com">
                Explore APIs
              </Button>

              <Button
                href="https://docs.octoreq.com"
                variant="outline"
              >
                Documentation
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>

              <span className="text-xs text-gray-500">
                POST /v1/payments
              </span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto p-6">
              <pre className="text-sm leading-7 text-gray-300">
{`curl --request POST \\
  --url https://api.octoreq.com/v1/payments \\
  --header "Authorization: Bearer YOUR_API_KEY" \\
  --header "Content-Type: application/json" \\
  --data '{
    "amount": 5000,
    "currency": "NGN",
    "customer": {
      "email": "merchant@example.com"
    }
  }'`}
              </pre>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}