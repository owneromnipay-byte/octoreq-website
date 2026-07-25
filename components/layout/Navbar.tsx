import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <nav className="py-6">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/octoreq-logo.jpg"
              alt="OCTOREQ"
              width={180}
              height={60}
              priority
              className="w-auto h-10 lg:h-12"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <Link href="/#products" className="transition hover:text-white">
              Products
            </Link>

            <Link href="/developers" className="transition hover:text-white">
              Developers
            </Link>

            <Link href="/pricing" className="transition hover:text-white">
              Pricing
            </Link>
           <Link href="/partners" className="transition hover:text-white">
              Partners
          </Link>

            <Link href="/legal" className="transition hover:text-white">
              Legal
            </Link>

            <Link href="/#about" className="transition hover:text-white">
              About
            </Link>

            <Link
              href="https://portal.octoreq.com/login"
              className="rounded-xl border border-gray-700 px-5 py-2 transition hover:border-gray-500"
            >
              Login
            </Link>

            <Link
              href="https://portal.octoreq.com/signup"
              className="rounded-xl bg-[#2AF371] px-5 py-2 font-semibold text-black transition hover:opacity-90"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            aria-label="Open navigation menu"
          >
            ☰
          </button>
        </div>
      </Container>
    </nav>
  );
}