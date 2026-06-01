"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { fetchProductsByCategory } from "../app/api/magento";
import type { Product } from "./types/product";

export default function ProductGrid() {

  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
 

  const categoryId = "1760";

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);
        const items = await fetchProductsByCategory(categoryId);
        setProducts(items);
      } catch (err ) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
       
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <section className="bg-[#f1f1f1] pb-10 px-4 sm:px-8 lg:px-[80px] w-full">
      <div
        className="
          grid gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          mx-auto max-w-[1224px] w-full
        "
      >
        {products.map((product) => (
          <ProductCard
            key={product.uid}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}