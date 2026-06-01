import type { Product } from "../../components/types/product";

export async function fetchProductsByCategory(
  categoryId: string
): Promise<Product[]> {
  const response = await fetch("/api/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}