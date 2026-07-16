import type { Metadata } from "next";
import { CategoryFilter } from "@/components/sections/CategoryFilter";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { getAllCategories } from "@/data/mock-categories";
import { getAllProducts } from "@/data/mock-products";

export const metadata: Metadata = {
  title: "Catalogue | Screentech",
  description:
    "Parcourez le catalogue Screentech : écrans, coques, batteries et accessoires smartphone.",
};

export default function CataloguePage() {
  const products = getAllProducts();
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <header className="space-y-2">
        <h1 className="text-foreground text-3xl font-bold tracking-tight">
          Catalogue
        </h1>
        <p className="text-ios-secondary text-sm">
          {products.length} produits — filtrez par catégorie pour affiner.
        </p>
      </header>

      <CategoryFilter categories={categories} />
      <ProductGrid products={products} />
    </div>
  );
}
