import Badge from "./Badge";
import Container from "../layout/Container";

interface PageHeaderProps {
  badge?: string;
  title: string;
  description: string;
}

export default function PageHeader({
  badge,
  title,
  description,
}: PageHeaderProps) {
  return (
    <section className="border-b border-white/10 py-24 lg:py-32">
      <Container>
        <div className="max-w-4xl">
          {badge && (
            <div className="mb-6">
              <Badge>{badge}</Badge>
            </div>
          )}

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-300">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}