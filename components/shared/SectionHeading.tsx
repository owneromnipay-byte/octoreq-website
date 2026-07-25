import Badge from "./Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center"
          ? "mx-auto text-center"
          : "text-left"
      }`}
    >
      {badge && (
        <div className="mb-4">
          <Badge>{badge}</Badge>
        </div>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}