import { getProducts } from "@/lib/api/dummy-products";
import { Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputSearch } from "./components/InputSearch";
import Image from "next/image";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const products = await getProducts(q);

  return (
    <div className="p-4 h-full">
      <section className="w-full h-fit">
        <InputSearch />
        <p>Found : {products.products.length}</p>
      </section>

      <section className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {products.products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="flex"
          >
            <Card className="flex w-full flex-col pt-0">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
                className="aspect-square w-full object-cover"
              />

              <CardHeader>
                <CardTitle className="line-clamp-2 min-h-14 text-sm">
                  {product.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1" />

              <CardFooter className="justify-between">
                <h1 className="text-primary truncate font-semibold">
                  $ {product.price}
                </h1>
                <div className="flex gap-2 items-center">
                  <Star size={15} />
                  <p className="truncate text-sm">
                    {product.rating} ({product.reviews.length})
                  </p>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
