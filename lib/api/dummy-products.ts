import { ProductsResponse } from "@/lib/types/dummy-product";

export async function getProducts(query: string): Promise<ProductsResponse> {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${query}`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed fetch");
  }

  return response.json();
}
