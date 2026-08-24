import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import ConversionSearch from "@/components/ConversionSearch";
import SearchRedirector from "@/components/SearchRedirector";

export const metadata: Metadata = {
  title: "Search unit conversions",
  description: "Search ConvertAnything for a unit conversion.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Suspense>
        <SearchRedirector />
      </Suspense>
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="font-semibold text-slate-950">
            ConvertAnything
          </Link>
        </div>
      </nav>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
        <h1 className="text-4xl font-bold tracking-normal">Search unit conversions</h1>
        <div className="mt-8">
          <ConversionSearch />
        </div>
      </section>
    </main>
  );
}
