import { ProductCard } from "@/components/sections/ProductCard";
import { getCategoryById } from "@/data/mock-categories";
import type { Product } from "@/types/product";
import { cn } from "@/lib/cn";

type ProductGridProps = {
  products: Product[];
  className?: string;
};

export function ProductGrid({ products, className }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="text-ios-secondary py-12 text-center text-sm">
        Aucun produit trouvé dans cette catégorie.
      </p>
    );
  }

  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4",
        className,
      )}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          categoryName={getCategoryById(product.categoryId)?.name}
        />
      ))}
    </div>
  );
}
