"use client";

import { useState } from "react";

/* ── Icons ─────────────────────────────────────────────────── */
function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#444" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#666" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#666" />
    </svg>
  );
}
function AccountIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="#666" />
    </svg>
  );
}
function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#666" />
    </svg>
  );
}
function CartIcon({ count = 7 }: { count?: number }) {
  return (
    <div className="relative">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.46 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="#444" />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#999] text-[#666] text-[10px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-0.5 leading-none">
          {count}
        </span>
      )}
    </div>
  );
}

/* ── Search field (shown on tablet+) ───────────────────────── */
function SearchField() {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);
  return (
    <div className={`bg-[#f9f9f9] border flex gap-3 h-[48px] items-center px-4 rounded-lg w-full transition-colors ${focused ? "border-[#444]" : "border-[#e2e2e2]"}`}>
      <SearchIcon />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="flex-1 bg-transparent text-[16px] text-[#222] placeholder:text-[#999] outline-none min-w-0"
        placeholder="Search products..."
      />
      {value && (
        <button onClick={() => setValue("")} aria-label="Clear">
          <CloseIcon />
        </button>
      )}
    </div>
  );
}

/* ── Header ─────────────────────────────────────────────────── */
export default function Header() {
  return (
    <header className="border-b border-[#e2e2e2] bg-[#f9f9f9] w-full sticky top-0 z-50">
      <div className="flex items-center gap-4 px-4 sm:px-8 lg:px-[80px] py-4 lg:py-6 w-full">

        {/* ── MOBILE HEADER ─────────────────────────────────────
            Left: Menu + Location  |  Logo (center)  |  Account + Cart
        ──────────────────────────────────────────────────────── */}

        {/* Left cluster */}
        <div className="flex items-center gap-0 shrink-0">
          <button className="flex items-center justify-center rounded-full size-[40px] hover:bg-[#e2e2e2] transition-colors" aria-label="Menu">
            <MenuIcon />
          </button>
          {/* Location icon — visible on mobile only */}
          <button className="flex items-center justify-center rounded-full size-[40px] hover:bg-[#e2e2e2] transition-colors lg:hidden" aria-label="Find a store">
            <LocationIcon />
          </button>
        </div>

        {/* Logo */}
        <div
          className="bg-[#444] rounded-full shrink-0 h-[24px] w-[142px] sm:h-[28px] sm:w-[170px] lg:h-[32px] lg:w-[189px]"
          aria-label="Total Tools"
        />

        {/* Search — hidden on mobile, visible on sm+ */}
        <div className="hidden sm:flex flex-1 min-w-0 max-w-[600px] lg:max-w-[704px]">
          <SearchField />
        </div>

        {/* Right cluster */}
        <div className="flex items-center gap-0 ml-auto shrink-0">
          {/* Sign In/Join — desktop only */}
          <button className="hidden lg:flex gap-2 h-[40px] items-center justify-center px-4 rounded-full hover:bg-[#e2e2e2] transition-colors">
            <AccountIcon />
            <span className="font-bold text-[16px] text-[#666] whitespace-nowrap">Sign In / Join</span>
          </button>

          {/* Account icon — mobile + tablet only */}
          <button className="lg:hidden flex items-center justify-center rounded-full size-[40px] hover:bg-[#e2e2e2] transition-colors" aria-label="My account">
            <AccountIcon />
          </button>

          {/* Location — desktop only */}
          <button className="hidden lg:flex items-center justify-center rounded-full size-[40px] hover:bg-[#e2e2e2] transition-colors" aria-label="Store location">
            <LocationIcon />
          </button>

          {/* Cart — always visible */}
          <button className="flex items-center justify-center rounded-full size-[40px] hover:bg-[#e2e2e2] transition-colors" aria-label="Shopping cart">
            <CartIcon count={7} />
          </button>
        </div>
      </div>

      {/* Search bar row — mobile only (below the main row) */}
      <div className="sm:hidden px-4 pb-3">
        <SearchField />
      </div>
    </header>
  );
}
