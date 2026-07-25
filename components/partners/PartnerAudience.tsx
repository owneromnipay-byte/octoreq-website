import Container from "@/components/layout/Container";

const audiences = [
  "Payment Consultants",
  "Digital Agencies",
  "Software Companies",
  "Developers",
  "System Integrators",
  "Technology Partners",
  "POS Vendors",
  "Business Consultants",
];

export default function PartnerAudience() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Who Should Join?
          </h2>

          <p className="text-lg leading-8 text-gray-400">
            Our Merchant Partner Program is designed for professionals and
            organizations that help businesses adopt technology and modern
            commerce solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center font-medium text-white transition hover:border-yellow-500"
            >
              {audience}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}