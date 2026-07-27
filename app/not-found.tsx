import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#2AF371]">
          Error 404
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
          Page not found
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-400">
          The page you're looking for doesn't exist, may have been moved,
          or the URL may be incorrect.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-[#2AF371] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#22d863] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2AF371]"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2AF371]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}