import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-[#2AF371]/20
        bg-[#2AF371]/10
        px-4
        py-1
        text-sm
        font-medium
        text-[#2AF371]
      "
    >
      {children}
    </span>
  );
}