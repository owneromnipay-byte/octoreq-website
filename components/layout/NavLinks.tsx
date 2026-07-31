import Link from "next/link";

export interface NavigationItem {
  name: string;
  href: string;
}

export const navigation: NavigationItem[] = [
  {
    name: "Products",
    href: "/#products",
  },
  {
    name: "Developers",
    href: "https://docs.octoreq.com",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Partners",
    href: "/partners",
  },
  {
    name: "Legal",
    href: "/legal",
  },
  {
    name: "About",
    href: "/#about",
  },
];

interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

export default function NavLinks({
  className = "",
  onClick,
}: NavLinksProps) {
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={onClick}
          className={`transition-colors duration-200 hover:text-white ${className}`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}