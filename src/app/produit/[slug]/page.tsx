import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InterestButton } from "@/components/sections/InterestButton";
import { ProductGallery } from "@/components/sections/ProductGallery";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { getCategoryById } from "@/data/mock-categories";
import {
  formatPrice,
  getAllProducts,
  getProductBySlug,
} from "@/data/mock-products";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Produit introuvable | Screentech" };
  }

  return {
    title: `${product.name} | Screentech`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryById(product.categoryId);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <nav className="text-ios-secondary mb-6 text-xs">
        <Link href="/catalogue" className="hover:text-ios-blue">
          Catalogue
        </Link>
        {category ? (
          <>
            <span className="mx-1.5">/</span>
            <Link
              href={`/catalogue/${category.slug}`}
              className="hover:text-ios-blue"
            >
              {category.name}
            </Link>
          </>
        ) : null}
        <span className="mx-1.5">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid gap-8 lg:grid-cols-2">
        <ProductGallery images={product.images} productName={product.name} />

        <div className="space-y-6">
          {category ? <Badge variant="info">{category.name}</Badge> : null}
          <div className="space-y-2">
            <h1 className="text-foreground text-3xl font-bold tracking-tight">
              {product.name}
            </h1>
            <p className="text-ios-blue text-2xl font-bold">
              {formatPrice(product.price, product.currency)}
            </p>
            <p className="text-ios-secondary text-sm">
              Prix indicatif — devis sur demande, aucun paiement en ligne.
            </p>
          </div>

          <Card className="space-y-3">
            <h2 className="text-foreground text-sm font-semibold">
              Description
            </h2>
            <p className="text-ios-secondary text-sm leading-relaxed">
              {product.description}
            </p>
          </Card>

          <InterestButton
            productName={product.name}
            productSlug={product.slug}
          />
        </div>
      </div>
    </div>
  );
}
