import { Card } from "@/components/ui/card";
import Image from "next/image";

export type ShowcaseItem = {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
};

export function ShowcaseCard({ item }: { item: ShowcaseItem }) {
  return (
    <Card className="group relative overflow-hidden rounded-2xl p-0">
      {/* Image */}
      <div className="relative w-full h-60">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 p-4 text-white">
        <h3 className="text-lg font-semibold line-clamp-1">{item.title}</h3>
        {item.description && (
          <p className="text-sm opacity-80 line-clamp-2">{item.description}</p>
        )}
      </div>
    </Card>
  );
}
