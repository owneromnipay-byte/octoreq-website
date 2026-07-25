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
    <section className="border-b border-white/10 py-24">
      <Container>
        <div className="max-w-4xl">
          {badge && (
            <div className="mb-6">
              <Badge>{badge}</Badge>
            </div>
          )}

          <h1 className="text-5xl font-bold text-white md:text-6xl">
            {title}
          </h1>

          <p className="mt-8 text-xl leading-9 text-gray-400">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}