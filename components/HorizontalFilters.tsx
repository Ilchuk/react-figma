"use client";

import { useState } from "react";

/* ── Icons ─────────────────────────────────────────────────── */
function ChevronDownIcon({ red }: { red?: boolean }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 10l5 5 5-5z" fill={red ? "#e22020" : "#666"} />
    </svg>
  );
}
function ChevronUpIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 14l5-5 5 5z" fill="#e22020" />
    </svg>
  );
}
function TuneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" fill="#666" />
    </svg>
  );
}
function CloseSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#444" />
    </svg>
  );
}

/* ── Dropdown (desktop) ─────────────────────────────────────── */
const FILTER_OPTIONS: Record<string, string[]> = {
  Brand: ["DeWalt", "Makita", "Bosch", "Milwaukee", "Ryobi"],
  Category: ["Power Tools", "Hand Tools", "Measuring", "Safety"],
  Price: ["Under $50", "$50–$100", "$100–$200", "Over $200"],
};

function FilterDropDown({ label, preselect }: { label: string; preselect?: string }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>(preselect ? [preselect] : []);

  const toggle = (v: string) =>
    setSelected((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));

  const hasActive = selected.length > 0;

  return (
    <div className="relative shrink-0 w-[240px]">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center justify-between w-full h-[48px] px-4 border rounded-lg text-[14px] font-medium transition-colors bg-white ${hasActive ? "border-[#444]" : "border-[#e2e2e2]"}`}
      >
        <div className="flex items-center gap-2">
          {hasActive && (
            <span className="flex items-center justify-center bg-[#222] rounded-full size-[20px]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="white" /></svg>
            </span>
          )}
          <span className="text-[#222]">{label}</span>
          {hasActive && <span className="text-[#666] text-[12px]">({selected.length})</span>}
        </div>
        {open ? <ChevronUpIcon /> : <ChevronDownIcon red={hasActive} />}
      </button>

      {open && (
        <div className="absolute top-[52px] left-0 bg-white border border-[#e2e2e2] rounded-lg shadow-md z-20 w-full py-2">
          {FILTER_OPTIONS[label]?.map((opt) => (
            <label key={opt} className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#f9f9f9] cursor-pointer">
              <span className={`flex items-center justify-center rounded-sm size-[18px] border transition-colors ${selected.includes(opt) ? "bg-[#222] border-[#222]" : "bg-white border-[#e2e2e2]"}`}>
                {selected.includes(opt) && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="white" /></svg>
                )}
              </span>
              <span className="text-[14px] text-[#222]">{opt}</span>
              <input type="checkbox" className="sr-only" checked={selected.includes(opt)} onChange={() => toggle(opt)} />
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Active chip ────────────────────────────────────────────── */
function ActiveChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <div className="flex gap-1 items-center bg-white border border-[#e2e2e2] rounded-lg pl-3 pr-2 py-1">
      <span className="text-[12px] text-[#222] whitespace-nowrap">{label}</span>
      <button onClick={onRemove} aria-label={`Remove ${label}`} className="hover:opacity-70">
        <CloseSmall />
      </button>
    </div>
  );
}

/* ── HorizontalFilters ──────────────────────────────────────── */
const INITIAL_ACTIVE = ["DeWalt", "Makita", "Power Tools", "Text"];

export default function HorizontalFilters() {
  const [activeFilters, setActiveFilters] = useState(INITIAL_ACTIVE);
  const remove = (f: string) => setActiveFilters((p) => p.filter((v) => v !== f));

  return (
    <section className="bg-[#f1f1f1] w-full">
      <div className="flex flex-col gap-6 items-center px-4 sm:px-8 lg:px-[80px] py-6 lg:py-10 w-full">

        {/* Filter row */}
        <div className="flex gap-4 items-end justify-between max-w-[1224px] w-full">

          {/* Desktop dropdowns (hidden on mobile) */}
          <div className="hidden lg:flex gap-4 flex-1">
            <FilterDropDown label="Brand" preselect="DeWalt" />
            <FilterDropDown label="Category" />
            <FilterDropDown label="Price" />
          </div>

          {/* Sort & Filter button — full width on mobile, fixed on desktop */}
          <button className="flex gap-2 h-[48px] items-center justify-center px-6 bg-[#f9f9f9] border border-[#666] rounded-full w-full lg:w-[240px] shrink-0 hover:bg-[#e2e2e2] transition-colors">
            <TuneIcon />
            <span className="font-bold text-[14px] text-[#444]">Sort &amp; Filter</span>
          </button>
        </div>

        {/* Active filters row */}
        {activeFilters.length > 0 && (
          <div className="flex flex-col gap-2 max-w-[1224px] w-full">
            <span className="text-[12px] font-bold text-[#312b81]">Active filtering</span>
            <div className="flex flex-wrap gap-2 items-center">
              {activeFilters.map((f) => (
                <ActiveChip key={f} label={f} onRemove={() => remove(f)} />
              ))}
              <button onClick={() => setActiveFilters([])} className="text-[12px] text-[#444] hover:underline">
                Clear All
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
