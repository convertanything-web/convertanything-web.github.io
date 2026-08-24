"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { hrefForParsedConversion, parseSearchQuery } from "@/lib/utils";

export default function SearchRedirector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    if (!query) return;

    const parsed = parseSearchQuery(query);
    if (parsed) router.replace(hrefForParsedConversion(parsed));
  }, [query, router]);

  return null;
}
