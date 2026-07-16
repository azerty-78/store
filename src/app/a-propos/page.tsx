import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "À propos | Screentech",
  description:
    "Découvrez Screentech : atelier de réparation et vitrine de pièces & accessoires smartphone.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-8">
      <header className="space-y-3">
        <h1 className="text-foreground text-3xl font-bold tracking-tight">
          À propos de Screentech
        </h1>
        <p className="text-ios-secondary text-base leading-relaxed">
          Screentech est une vitrine e-commerce dédiée aux pièces, écrans et
          accessoires pour smartphones. Notre mission : rendre la réparation et
          l&apos;équipement simples, transparents et accessibles.
        </p>
      </header>

      <Card className="space-y-3">
        <h2 className="text-foreground text-lg font-semibold">
          Notre approche
        </h2>
        <ul className="text-ios-secondary list-inside list-disc space-y-2 text-sm">
          <li>Sélection soignée de pièces et accessoires</li>
          <li>Conseils personnalisés selon votre appareil</li>
          <li>Devis clair, sans paiement en ligne</li>
          <li>Suivi atelier pour les réparations</li>
        </ul>
      </Card>

      <Card className="space-y-3">
        <h2 className="text-foreground text-lg font-semibold">
          Une vitrine, pas une boutique en ligne
        </h2>
        <p className="text-ios-secondary text-sm leading-relaxed">
          Ce site présente notre catalogue pour vous aider à identifier le bon
          produit ou service. Les commandes et devis se font via le formulaire
          de contact — aucun panier ni paiement en ligne pour le moment.
        </p>
      </Card>

      <div className="flex flex-wrap gap-3">
        <Link href="/catalogue">
          <Button variant="secondary">Voir le catalogue</Button>
        </Link>
        <Link href="/contact">
          <Button>Nous contacter</Button>
        </Link>
      </div>
    </div>
  );
}
