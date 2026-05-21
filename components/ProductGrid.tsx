import ProductCard from "./ProductCard";

const PRODUCTS = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: "This Is A Product With A Very Long Product Name",
  price: "0,000",
}));

export default function ProductGrid() {
  return (
    <section className="bg-[#f1f1f1] pb-10 px-4 sm:px-8 lg:px-[80px] w-full">
      {/*
        Mobile  (< sm):  1-column, horizontal cards
        Tablet  (sm–lg): 2-column, vertical cards
        Desktop (lg+):   4-column, vertical cards
      */}
      <div className="
        grid gap-4
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        mx-auto max-w-[1224px] w-full
      ">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} name={p.name} price={p.price} />
        ))}
      </div>
    </section>
  );
}
