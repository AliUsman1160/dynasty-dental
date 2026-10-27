"use client";

import { Search, X } from "lucide-react";
import { useId, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { serviceCategories, services } from "@/data/services";
import { cn } from "@/lib/utils";
import { ServiceCard } from "./ServiceCard";

type Filter = "All" | (typeof serviceCategories)[number];

export function ServiceFilters() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Filter>("All");
  const searchId = useId();

  // Only show categories that actually contain services.
  const categories = useMemo(() => serviceCategories.filter((c) => services.some((s) => s.category === c)), []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return services.filter((s) => {
      const inCategory = category === "All" || s.category === category;
      const matches = !q || `${s.name} ${s.summary} ${s.category}`.toLowerCase().includes(q);
      return inCategory && matches;
    });
  }, [query, category]);

  const filtersActive = query !== "" || category !== "All";
  const clear = () => {
    setQuery("");
    setCategory("All");
  };

  return (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <label htmlFor={searchId} className="sr-only">
            Search services
          </label>
          <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-body" />
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services…"
            className="h-13 w-full rounded-full border border-line bg-white py-3.5 pl-12 pr-4 text-ink placeholder:text-body/70 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
          />
        </div>
        <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {(["All", ...categories] as Filter[]).map((c) => (
            <button
              key={c}
              type="button"
              aria-pressed={category === c}
              onClick={() => setCategory(c)}
              className={cn(
                "min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors",
                category === c ? "border-navy bg-navy text-white" : "border-line bg-white text-navy hover:border-navy/40",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p role="status" aria-live="polite" className="text-sm font-semibold text-navy">
          Showing {results.length} of {services.length} services
        </p>
        {filtersActive && (
          <button type="button" onClick={clear} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-teal-dark hover:underline">
            <X aria-hidden className="size-4" /> Clear filters
          </button>
        )}
      </div>

      {results.length > 0 ? (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-3xl border border-dashed border-line bg-white px-6 py-16 text-center">
          <h2 className="text-xl font-bold">No services match your search</h2>
          <p className="mx-auto mt-2 max-w-md">Try a different keyword or category, or get in touch and we will happily help.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="secondary" href="/contact">Contact the clinic</Button>
            <button type="button" onClick={clear} className="min-h-12 rounded-full bg-navy px-6 font-semibold text-white hover:bg-navy-dark">
              Clear filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
