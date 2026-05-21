"use client";

import { useState } from "react";

function ArrowLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor" />
    </svg>
  );
}
function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor" />
    </svg>
  );
}

const TOTAL = 10;

export default function Pagination() {
  const [current, setCurrent] = useState(1);

  const pages = (): (number | "…")[] => {
    const p: (number | "…")[] = [1];
    if (current > 3) p.push("…");
    const s = Math.max(2, current - 1);
    const e = Math.min(TOTAL - 1, current + 1);
    for (let i = s; i <= e; i++) p.push(i);
    if (current < TOTAL - 2) p.push("…");
    p.push(TOTAL);
    return p;
  };

  return (
    <section className="bg-[#f1f1f1] pb-10 w-full flex justify-center">
      <nav aria-label="Pagination" className="flex items-center">
        <button
          onClick={() => setCurrent((p) => Math.max(1, p - 1))}
          disabled={current === 1}
          aria-label="Previous page"
          className="flex items-center justify-center rounded-full size-[48px] text-[#222] disabled:opacity-30 hover:bg-[#e2e2e2] transition-colors"
        >
          <ArrowLeft />
        </button>

        {pages().map((page, i) =>
          page === "…" ? (
            <span key={`e${i}`} className="flex items-center justify-center size-[48px] font-bold text-[16px] text-[#666]">…</span>
          ) : (
            <button
              key={page}
              onClick={() => setCurrent(page as number)}
              aria-current={current === page ? "page" : undefined}
              className={`flex items-center justify-center rounded-full size-[48px] font-bold text-[16px] transition-colors ${
                current === page ? "bg-[#999] text-[#222]" : "text-[#222] hover:bg-[#e2e2e2]"
              }`}
            >
              {page}
            </button>
          )
        )}

        <button
          onClick={() => setCurrent((p) => Math.min(TOTAL, p + 1))}
          disabled={current === TOTAL}
          aria-label="Next page"
          className="flex items-center justify-center rounded-full size-[48px] text-[#222] disabled:opacity-30 hover:bg-[#e2e2e2] transition-colors"
        >
          <ArrowRight />
        </button>
      </nav>
    </section>
  );
}
