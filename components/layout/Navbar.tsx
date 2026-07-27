"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              aria-label="OCTOREQ Home"
              className="flex items-center"
            >
              <Image
                src="/octoreq-logo.jpg"
                alt="OCTOREQ"
                width={180}
                height={60}
                priority
                className="h-10 w-auto lg:h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-8 text-sm text-gray-300 md:flex"
            >
              <NavLinks />
            </nav>

            {/* Desktop Actions */}
            <div className="hidden items-center gap-4 md:flex">
              <Link
                href="https://portal.octoreq.com/login"
                className="rounded-xl border border-gray-700 px-5 py-2 text-sm font-medium text-white transition hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AF371]"
              >
                Login
              </Link>

              <Link
                href="https://portal.octoreq.com/signup"
                className="rounded-xl bg-[#2AF371] px-5 py-2 text-sm font-semibold text-black transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AF371]"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
              className="rounded-md p-2 text-3xl text-white transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AF371] md:hidden"
            >
              ☰
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}