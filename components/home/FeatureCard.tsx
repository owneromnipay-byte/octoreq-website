interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="group rounded-2xl border border-gray-800 bg-neutral-950 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#2AF371]/40">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2AF371]/10">
        {icon ?? (
          <div className="h-2.5 w-2.5 rounded-full bg-[#2AF371]" />
        )}
      </div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-400">
        {description}
      </p>
    </div>
  );
}