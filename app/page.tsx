import Header from "@/components/Header";
import CategoryTiles from "@/components/CategoryTiles";
import HorizontalFilters from "@/components/HorizontalFilters";
import ProductGrid from "@/components/ProductGrid";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";

function HomeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="#222" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#222" />
    </svg>
  );
}

export default function ProductListingPage() {
  return (
    <div className="bg-[#f9f9f9] flex flex-col w-full min-h-screen">
      <Header />

      {/* Page header */}
      <section className="bg-[#f9f9f9] flex flex-col gap-0 items-center px-4 sm:px-8 lg:px-[80px] py-6 lg:py-10 w-full">
        <div className="flex flex-col gap-3 lg:gap-4 items-start max-w-[1224px] w-full">

          {/* Breadcrumbs */}
          <nav className="flex items-center text-[10px] text-[#222] flex-wrap" aria-label="Breadcrumb">
            {/* Mobile: truncated — Home > ... > Sub-Category */}
            <span className="flex items-center sm:hidden gap-0">
              <HomeIcon />
              <ChevronRight />
              <span>…</span>
              <ChevronRight />
              <span>Sub-Category</span>
              <ChevronRight />
            </span>
            {/* Tablet+: full breadcrumb */}
            <span className="hidden sm:flex items-center gap-0">
              <HomeIcon />
              <ChevronRight />
              <span>Category</span>
              <ChevronRight />
              <span>Sub-Category</span>
              <ChevronRight />
              <span>Sub-Category</span>
              <ChevronRight />
            </span>
          </nav>

          <h1 className="font-bold text-[28px] sm:text-[32px] lg:text-[39px] text-[#222] leading-tight w-full">
            Page Heading
          </h1>
        </div>
      </section>

      <CategoryTiles />
      <HorizontalFilters />
      <ProductGrid />
      <Pagination />
      <Footer />
    </div>
  );
}
