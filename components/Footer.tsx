"use client";

import { useState } from "react";

/* ── Social icons ───────────────────────────────────────────── */
function FacebookIcon() {
  return (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden>
      <path d="M9 1H6.5C5.4 1 4.5 1.9 4.5 3V5H2V8H4.5V17H7.5V8H10L10.5 5H7.5V3.5C7.5 3.22 7.72 3 8 3H10L9 1Z" fill="#f9f9f9" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" fill="#f9f9f9" />
    </svg>
  );
}
function YouTubeIcon() {
  return (
    <svg width="18" height="13" viewBox="0 0 24 18" fill="none" aria-hidden>
      <path d="M23.495 2.694A3.003 3.003 0 0 0 21.39.567C19.505 0 12 0 12 0S4.495 0 2.61.567A3.003 3.003 0 0 0 .505 2.694C0 4.598 0 8.571 0 8.571s0 3.974.505 5.878a3.003 3.003 0 0 0 2.105 2.127C4.495 17.143 12 17.143 12 17.143s7.505 0 9.39-.567a3.003 3.003 0 0 0 2.105-2.127C24 12.545 24 8.571 24 8.571s0-3.973-.505-5.877zM9.545 12.143V5l6.273 3.571-6.273 3.572z" fill="#f9f9f9" />
    </svg>
  );
}
function SocialBtn({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <button className="bg-[#f9f9f9]/10 flex items-center justify-center rounded-full size-[32px] hover:bg-[#f9f9f9]/20 transition-colors" aria-label={label}>
      {children}
    </button>
  );
}

/* ── Nav data ───────────────────────────────────────────────── */
const NAV: Record<string, string[]> = {
  Shopping: ["Blog", "Lower Price Guarentee", "Catalogue", "Gift Cards", "Rewards", "Delivery & Returns"],
  Company: ["About us", "Media Contact", "Corporate Governance", "Franchise Enquiries"],
  legal: ["Privacy Policy", "Terms & Conditions", "Promotional Terms & Conditions", "Product Safety Recall"],
};

/* ── Accordion item (mobile) ────────────────────────────────── */
function Accordion({ title, links, defaultOpen }: { title: string; links: string[]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border-t border-[#f9f9f9]/30 w-full">
      <button onClick={() => setOpen((v) => !v)} className="flex items-center justify-between w-full py-5">
        <span className="font-bold text-[16px] text-[#f9f9f9]">{title}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <path d="M7 10l5 5 5-5z" fill="#f9f9f9" />
        </svg>
      </button>
      {open && (
        <div className="flex flex-col gap-4 pb-6">
          {links.map((l) => <a key={l} href="#" className="text-[16px] text-[#f9f9f9] hover:text-white">{l}</a>)}
        </div>
      )}
    </div>
  );
}

/* ── Payment pills ──────────────────────────────────────────── */
const PAYMENTS = [
  { label: "AMEX", bg: "#2E77BC", fg: "#fff", text: "AMEX" },
  { label: "MC",   bg: "#EB001B", fg: "#fff", text: "MC"   },
  { label: "VISA", bg: "#1A1F71", fg: "#fff", text: "VISA" },
  { label: "PP",   bg: "#003087", fg: "#fff", text: "PP"   },
  { label: "DISC", bg: "#F76F20", fg: "#fff", text: "DISC" },
  { label: "Zip",  bg: "#1A0826", fg: "#fff", text: "zip"  },
  { label: "GPay", bg: "#fff",    fg: "#222", text: "G Pay"},
  { label: "APay", bg: "#000",    fg: "#fff", text: "Pay"  },
];

function PaymentRow({ small }: { small?: boolean }) {
  const h = small ? "h-[24px]" : "h-[28px]";
  const px = small ? "px-1.5" : "px-2";
  const min = small ? "min-w-[36px]" : "min-w-[44px]";
  const fs = small ? "text-[9px]" : "text-[10px]";
  return (
    <div className="flex flex-wrap gap-2 items-center justify-center">
      {PAYMENTS.map((p) => (
        <div key={p.label} title={p.label} className={`flex items-center justify-center rounded ${h} ${px} ${min}`} style={{ backgroundColor: p.bg }}>
          <span className={`${fs} font-bold`} style={{ color: p.fg }}>{p.text}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Footer ─────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="w-full">

      {/* ════════════════════════════════════════════════
          MOBILE  (<640px) — accordion links, centered help
      ════════════════════════════════════════════════ */}
      <div className="sm:hidden bg-[#666] flex flex-col items-center px-4 py-10 gap-6 w-full">
        {/* Help */}
        <div className="flex flex-col items-center gap-5 text-center w-full">
          <p className="font-bold text-[25px] text-[#f9f9f9]">Need help?</p>
          <p className="text-[16px] text-[#f9f9f9] leading-6">
            If you need help search our{" "}
            <a href="#" className="underline text-[#f9f9f9]">help centre</a>{" "}
            for FAQs or to browse topics to find the help you need.
          </p>
          <button className="bg-[#444] font-bold text-[16px] text-[#f9f9f9] px-8 h-[56px] rounded-full hover:bg-[#222] transition-colors">
            Help Centre
          </button>
          <div className="flex gap-2">
            <SocialBtn label="Facebook"><FacebookIcon /></SocialBtn>
            <SocialBtn label="Instagram"><InstagramIcon /></SocialBtn>
            <SocialBtn label="YouTube"><YouTubeIcon /></SocialBtn>
          </div>
        </div>
        {/* Accordions */}
        <div className="w-full px-2">
          {Object.entries(NAV).map(([title, links], i) => (
            <Accordion key={title} title={title} links={links} defaultOpen={i === 1} />
          ))}
        </div>
      </div>
      {/* Mobile bottom: white with payment icons */}
      <div className="sm:hidden bg-[#f9f9f9] flex flex-col gap-6 items-center px-4 py-10">
        <PaymentRow />
        <p className="text-[13px] text-[#222] text-center">© 2026 Total Tools. All Rights Reserved.</p>
      </div>

      {/* ════════════════════════════════════════════════
          TABLET  (640px–1023px) — 3-col links, help row
      ════════════════════════════════════════════════ */}
      <div className="hidden sm:flex lg:hidden bg-[#666] flex-col items-start px-8 py-12 gap-8 w-full">
        {/* Help row */}
        <div className="flex flex-col gap-5 w-full">
          <p className="font-bold text-[22px] text-[#f9f9f9]">Need help?</p>
          <p className="text-[15px] text-[#f9f9f9] leading-6">
            Search our <a href="#" className="underline text-[#f9f9f9]">help centre</a> for FAQs or to find the help you need.
          </p>
          <button className="bg-[#444] font-bold text-[15px] text-[#f9f9f9] px-6 h-[44px] rounded-full self-start hover:bg-[#222] transition-colors">
            Help Centre
          </button>
          <div className="flex gap-2">
            <SocialBtn label="Facebook"><FacebookIcon /></SocialBtn>
            <SocialBtn label="Instagram"><InstagramIcon /></SocialBtn>
            <SocialBtn label="YouTube"><YouTubeIcon /></SocialBtn>
          </div>
        </div>
        {/* 3-col links */}
        <div className="grid grid-cols-3 gap-6 border-t border-[#f9f9f9]/20 pt-8 w-full">
          {Object.entries(NAV).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-2.5">
              <p className="font-bold text-[15px] text-[#f9f9f9] mb-1">{title}</p>
              {links.map((l) => <a key={l} href="#" className="text-[13px] text-[#f9f9f9] hover:text-white">{l}</a>)}
            </div>
          ))}
        </div>
      </div>
      {/* Tablet bottom: dark bar */}
      <div className="hidden sm:flex lg:hidden bg-[#444] flex-col sm:flex-row gap-4 items-center justify-between px-8 py-4">
        <p className="text-[13px] text-[#f9f9f9]">© 2026 Total Tools. All Rights Reserved.</p>
        <PaymentRow small />
      </div>

      {/* ════════════════════════════════════════════════
          DESKTOP  (1024px+) — side-by-side help + links
      ════════════════════════════════════════════════ */}
      <div className="hidden lg:flex bg-[#666] justify-center px-[80px] w-full">
        <div className="flex gap-[160px] items-start max-w-[1224px] w-full">
          {/* Help column */}
          <div className="flex flex-col gap-6 py-[80px] w-[380px] shrink-0">
            <p className="font-bold text-[25px] text-[#f9f9f9]">Need help?</p>
            <p className="text-[16px] text-[#f9f9f9] leading-6">
              If you need help search our{" "}
              <a href="#" className="underline text-[#f9f9f9]">help centre</a>{" "}
              for FAQs or to browse topics to find the help you need.
            </p>
            <button className="bg-[#444] font-bold text-[16px] text-[#f9f9f9] px-6 h-[48px] rounded-full self-start hover:bg-[#222] transition-colors">
              Help Centre
            </button>
            <div className="flex gap-2">
              <SocialBtn label="Facebook"><FacebookIcon /></SocialBtn>
              <SocialBtn label="Instagram"><InstagramIcon /></SocialBtn>
              <SocialBtn label="YouTube"><YouTubeIcon /></SocialBtn>
            </div>
          </div>
          {/* Link columns */}
          <div className="flex flex-1 gap-8 py-[80px] min-w-0">
            {Object.entries(NAV).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-3 flex-1 min-w-0">
                <p className="font-bold text-[16px] text-[#f9f9f9] mb-1">{title}</p>
                {links.map((l) => <a key={l} href="#" className="text-[14px] text-[#f9f9f9] hover:text-white leading-relaxed">{l}</a>)}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop bottom bar */}
      <div className="hidden lg:flex bg-[#444] items-center justify-between px-[80px] py-4 w-full">
        <p className="text-[13px] text-[#f9f9f9]">© 2026 Total Tools. All Rights Reserved.</p>
        <PaymentRow small />
      </div>

    </footer>
  );
}
