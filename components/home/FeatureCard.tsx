import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <article
      className="
        group
        rounded-2xl
        border
        border-white/10
        bg-neutral-950
        p-8
        transition-all
        duration-300
        hover:border-[#2AF371]/30
        hover:bg-neutral-900
        hover:shadow-xl
      "
    >
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#2AF371]/20 bg-[#2AF371]/5">
        {icon ?? (
          <div className="h-2.5 w-2.5 rounded-full bg-[#2AF371]" />
        )}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-300">
        {description}
      </p>
    </article>
  );
}