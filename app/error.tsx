"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCw } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#2AF371]">
          Something went wrong
        </p>

        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
          Unexpected Error
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-neutral-400">
          An unexpected error occurred while loading this page. Please try
          again, or return to the homepage.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-full bg-[#2AF371] px-6 py-3 text-sm font-semibold text-black transition-colors hover:bg-[#22d863] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2AF371]"
          >
            <RotateCw className="h-4 w-4" />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/20 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2AF371]"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}