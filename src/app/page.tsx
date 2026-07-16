import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { getAllCategories } from "@/data/mock-categories";
import { getFeaturedProducts } from "@/data/mock-products";

export const metadata: Metadata = {
  title: "Accueil | Screentech",
  description:
    "Screentech — vitrine de pièces, écrans et accessoires smartphone. Devis gratuit, conseils experts.",
};

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 8);
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-4 py-8">
      <Hero />

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-foreground text-2xl font-bold tracking-tight">
              Catégories
            </h2>
            <p className="text-ios-secondary mt-1 text-sm">
              Explorez notre sélection par famille de produits.
            </p>
          </div>
          <Link
            href="/catalogue"
            className="text-ios-blue hidden text-sm font-medium sm:inline"
          >
            Tout voir
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.id} href={`/catalogue/${category.slug}`}>
              <Card className="overflow-hidden p-0 transition-transform hover:scale-[1.02]">
                <div className="bg-ios-gray-fill relative aspect-[4/3]">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-foreground text-sm font-semibold">
                    {category.name}
                  </h3>
                  <p className="text-ios-secondary mt-1 line-clamp-2 text-xs">
                    {category.description}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div>
          <h2 className="text-foreground text-2xl font-bold tracking-tight">
            Sélection du moment
          </h2>
          <p className="text-ios-secondary mt-1 text-sm">
            Produits mis en avant — sans panier, contactez-nous pour un devis.
          </p>
        </div>
        <ProductGrid products={featured} />
      </section>

      <section>
        <Card className="space-y-4 text-center sm:text-left">
          <h2 className="text-foreground text-xl font-bold">À propos</h2>
          <p className="text-ios-secondary text-sm leading-relaxed">
            Screentech accompagne particuliers et professionnels dans la
            réparation et l&apos;équipement de smartphones. Pièces
            sélectionnées, transparence sur les prix, et un atelier à votre
            écoute — sans paiement en ligne, uniquement sur devis.
          </p>
          <div className="flex justify-center sm:justify-start">
            <Link href="/a-propos">
              <Button variant="secondary">En savoir plus</Button>
            </Link>
          </div>
        </Card>
      </section>

      <section>
        <Card className="from-ios-blue/10 to-ios-green/10 space-y-4 bg-gradient-to-br text-center">
          <h2 className="text-foreground text-xl font-bold">
            Un projet, une réparation ?
          </h2>
          <p className="text-ios-secondary mx-auto max-w-lg text-sm">
            Décrivez votre besoin : nous vous répondons avec un devis clair,
            sans engagement.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button>Nous contacter</Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
