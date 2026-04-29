import { ShowcaseCard, ShowcaseItem } from "./ShowcaseCard";

export function ShowcaseGrid({ items }: { items: ShowcaseItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <ShowcaseCard key={item.id} item={item} />
      ))}
    </div>
  );
}
