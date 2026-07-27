"use client";

import { useEffect } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Prevent background scrolling
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 motion-reduce:transition-none ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-50 flex h-screen w-full max-w-xs flex-col border-l border-white/10 bg-[#0B0B0B] px-8 py-8 shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none sm:max-w-sm ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="mb-10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-md p-1 text-3xl text-gray-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AF371]"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Mobile"
          className="flex flex-col gap-6 text-lg text-gray-300"
        >
          <NavLinks
            className="transition-colors hover:text-white"
            onClick={onClose}
          />
        </nav>

        {/* CTA Buttons */}
        <div className="mt-auto flex flex-col gap-4 pt-10">
          <Link
            href="https://portal.octoreq.com/login"
            onClick={onClose}
            className="rounded-xl border border-gray-700 py-3 text-center font-medium text-white transition hover:border-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AF371]"
          >
            Login
          </Link>

          <Link
            href="https://portal.octoreq.com/signup"
            onClick={onClose}
            className="rounded-xl bg-[#2AF371] py-3 text-center font-semibold text-black transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2AF371]"
          >
            Get Started
          </Link>
        </div>
      </aside>
    </>
  );
}