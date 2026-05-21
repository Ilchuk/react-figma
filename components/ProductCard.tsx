function CartIconSmall() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0 0 23.46 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" fill="#f9f9f9" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#2e7d32" />
    </svg>
  );
}

function StockItem({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-0.5 items-center">
      <CheckCircleIcon />
      <span className="text-[10px] text-[#222] text-center whitespace-nowrap leading-tight">{label}</span>
    </div>
  );
}

interface ProductCardProps {
  name?: string;
  price?: string;
}

export default function ProductCard({
  name = "This Is A Product With A Very Long Product Name",
  price = "0,000",
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden w-full">

      {/* ── MOBILE LAYOUT: horizontal (image left, details right) ── */}
      <div className="flex items-stretch sm:hidden">
        {/* Image */}
        <div className="shrink-0 p-4 w-[140px] flex items-center justify-center">
          <div className="bg-[#e2e2e2] rounded aspect-square w-full" />
        </div>
        {/* Details */}
        <div className="flex flex-col gap-3 py-4 pr-4 flex-1 min-w-0">
          <p className="text-[13px] text-[#222] leading-5 line-clamp-3">{name}</p>
          <div className="flex items-baseline gap-0.5">
            <sup className="text-[12px] font-bold text-[#222] leading-none">$</sup>
            <span className="text-[24px] font-bold text-[#222] leading-none">{price.split(".")[0]}</span>
            <sup className="text-[12px] font-bold text-[#222] leading-none">.{price.split(".")[1] ?? "00"}</sup>
          </div>
          <button className="bg-[#444] flex gap-1.5 h-[36px] items-center justify-center px-4 rounded-full w-full hover:bg-[#222] transition-colors">
            <CartIconSmall />
            <span className="font-bold text-[14px] text-[#f9f9f9]">Add to Cart</span>
          </button>
          <div className="flex gap-2 items-center justify-center">
            <StockItem label="In-Store" />
            <StockItem label="Click & Collect" />
            <StockItem label="Delivery" />
          </div>
        </div>
      </div>

      {/* ── TABLET + DESKTOP LAYOUT: vertical (image top, details bottom) ── */}
      <div className="hidden sm:flex flex-col items-start">
        {/* Image */}
        <div className="flex items-center justify-between pb-4 pt-6 px-4 w-full">
          <div className="aspect-square flex-1 flex flex-col items-center min-w-0 rounded-sm">
            <div className="bg-[#e2e2e2] rounded w-full aspect-square" />
          </div>
        </div>
        {/* Details */}
        <div className="flex flex-col gap-3 pb-6 px-4 w-full flex-1">
          <p className="text-[14px] text-[#222] leading-5 min-h-[60px] line-clamp-3">{name}</p>
          <div className="flex items-baseline gap-0.5">
            <sup className="text-[14px] font-bold text-[#222] leading-none">$</sup>
            <span className="text-[28px] font-bold text-[#222] leading-none">{price.split(".")[0]}</span>
            <sup className="text-[14px] font-bold text-[#222] leading-none">.{price.split(".")[1] ?? "00"}</sup>
          </div>
          <button className="bg-[#444] flex gap-1.5 h-[40px] items-center justify-center px-6 rounded-full w-full hover:bg-[#222] transition-colors">
            <CartIconSmall />
            <span className="font-bold text-[16px] text-[#f9f9f9]">Add to Cart</span>
          </button>
          <div className="flex gap-4 items-center justify-center pt-1">
            <StockItem label="In-Store" />
            <StockItem label="Click & Collect" />
            <StockItem label="Delivery" />
          </div>
        </div>
      </div>

    </div>
  );
}
