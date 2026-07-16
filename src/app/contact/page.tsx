import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact | Screentech",
  description:
    "Contactez Screentech pour un devis, une question produit ou une réparation.",
};

type PageProps = {
  searchParams: Promise<{ sujet?: string; produit?: string }>;
};

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const defaultSubject = params.sujet?.trim() || "";

  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-8">
      <header className="space-y-2">
        <h1 className="text-foreground text-3xl font-bold tracking-tight">
          Contact
        </h1>
        <p className="text-ios-secondary text-sm">
          Envoyez-nous un message — validation côté navigateur uniquement pour
          l&apos;instant (aucun envoi réel).
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-[1fr_1.2fr]">
        <Card className="h-fit space-y-3">
          <h2 className="text-foreground text-sm font-semibold">Coordonnées</h2>
          <p className="text-ios-secondary text-sm">
            Screentech
            <br />
            contact@screentech.example
            <br />
            Lun–Ven · 9h–18h
          </p>
          {params.produit ? (
            <p className="text-ios-blue text-xs">
              Produit concerné : {params.produit}
            </p>
          ) : null}
        </Card>

        <ContactForm defaultSubject={defaultSubject} />
      </div>
    </div>
  );
}
