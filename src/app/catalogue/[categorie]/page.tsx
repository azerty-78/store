import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryFilter } from "@/components/sections/CategoryFilter";
import { ProductGrid } from "@/components/sections/ProductGrid";
import {
  getAllCategories,
  getCategoryBySlug,
} from "@/data/mock-categories";
import { getProductsByCategorySlug } from "@/data/mock-products";

type PageProps = {
  params: Promise<{ categorie: string }>;
};

export async function generateStaticParams() {
  return getAllCategories().map((category) => ({
    categorie: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { categorie } = await params;
  const category = getCategoryBySlug(categorie);

  if (!category) {
    return { title: "Catégorie introuvable | Screentech" };
  }

  return {
    title: `${category.name} | Catalogue Screentech`,
    description: category.description,
  };
}

export default async function CatalogueCategoryPage({ params }: PageProps) {
  const { categorie } = await params;
  const category = getCategoryBySlug(categorie);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategorySlug(categorie);
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      <header className="space-y-2">
        <h1 className="text-foreground text-3xl font-bold tracking-tight">
          {category.name}
        </h1>
        <p className="text-ios-secondary max-w-2xl text-sm">
          {category.description}
        </p>
        <p className="text-ios-secondary text-xs">
          {products.length} produit{products.length > 1 ? "s" : ""}
        </p>
      </header>

      <CategoryFilter categories={categories} activeSlug={category.slug} />
      <ProductGrid products={products} />
    </div>
  );
}
