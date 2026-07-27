interface DividerProps {
  className?: string;
}

export default function Divider({
  className = "",
}: DividerProps) {
  return (
    <hr
      className={`mx-auto h-px w-full max-w-7xl border-0 bg-gradient-to-r from-transparent via-white/10 to-transparent ${className}`}
    />
  );
}