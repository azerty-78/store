import type { Category } from "@/types/product";

const categories: Category[] = [
  {
    id: "cat-ecrans",
    slug: "ecrans",
    name: "Écrans",
    description:
      "Écrans de remplacement OEM et premium pour smartphones et tablettes.",
    image: "/images/produits/cat-ecrans.svg",
  },
  {
    id: "cat-coques",
    slug: "coques",
    name: "Coques & protection",
    description:
      "Coques, films et verres trempés pour protéger votre appareil au quotidien.",
    image: "/images/produits/cat-coques.svg",
  },
  {
    id: "cat-batteries",
    slug: "batteries",
    name: "Batteries",
    description:
      "Batteries de remplacement haute capacité, testées et garanties.",
    image: "/images/produits/cat-batteries.svg",
  },
  {
    id: "cat-accessoires",
    slug: "accessoires",
    name: "Accessoires",
    description:
      "Chargeurs, câbles, écouteurs et accessoires essentiels.",
    image: "/images/produits/cat-accessoires.svg",
  },
];

export function getAllCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((category) => category.id === id);
}
