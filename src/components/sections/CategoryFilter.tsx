import Link from "next/link";
import type { Category } from "@/types/product";
import { cn } from "@/lib/cn";

type CategoryFilterProps = {
  categories: Category[];
  activeSlug?: string;
};

export function CategoryFilter({
  categories,
  activeSlug,
}: CategoryFilterProps) {
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
      <Link
        href="/catalogue"
        className={cn(
          "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
          !activeSlug
            ? "bg-ios-blue text-white"
            : "bg-ios-gray-fill text-foreground hover:bg-ios-gray-fill/80",
        )}
      >
        Tous
      </Link>
      {categories.map((category) => {
        const isActive = activeSlug === category.slug;
        return (
          <Link
            key={category.id}
            href={`/catalogue/${category.slug}`}
            className={cn(
              "shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              isActive
                ? "bg-ios-blue text-white"
                : "bg-ios-gray-fill text-foreground hover:bg-ios-gray-fill/80",
            )}
          >
            {category.name}
          </Link>
        );
      })}
    </div>
  );
}
