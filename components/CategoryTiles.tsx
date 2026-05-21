const CATEGORIES = [
  { label: "Power Tools", id: 1 },
  { label: "Hand Tools", id: 2 },
  { label: "Measuring", id: 3 },
  { label: "Safety", id: 4 },
  { label: "Fastening", id: 5 },
  { label: "Plumbing", id: 6 },
  { label: "Electrical", id: 7 },
  { label: "Storage", id: 8 },
];

export default function CategoryTiles() {
  return (
    <section className="bg-[#f9f9f9] pb-10 px-4 sm:px-8 lg:px-[80px] w-full overflow-x-auto">
      <div className="flex gap-2 items-start mx-auto w-full max-w-[1224px] min-w-0">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className="flex flex-col gap-2 items-center shrink-0
              w-[75px] lg:w-[113px]
              group"
          >
            {/* Tile circle */}
            <div
              className="
                bg-[#e2e2e2] rounded-full overflow-hidden
                size-[56px] lg:size-[82px]
                group-hover:bg-[#d0d0d0] transition-colors
              "
            />
            {/* Label */}
            <span className="font-bold text-[10px] lg:text-[12px] text-[#222] text-center leading-tight">
              {cat.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
