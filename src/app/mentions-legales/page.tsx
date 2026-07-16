import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Mentions légales | Screentech",
  description: "Mentions légales du site vitrine Screentech.",
};

export default function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-4 py-8">
      <header className="space-y-2">
        <h1 className="text-foreground text-3xl font-bold tracking-tight">
          Mentions légales
        </h1>
        <p className="text-ios-secondary text-sm">
          Informations légales relatives au site vitrine Screentech.
        </p>
      </header>

      <Card className="space-y-6 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-foreground text-base font-semibold">Éditeur</h2>
          <p className="text-ios-secondary">
            Screentech — site vitrine e-commerce (démonstration).
            <br />
            Adresse fictive : 12 rue de la Réparation, 75000 Paris.
            <br />
            E-mail : contact@screentech.example
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-foreground text-base font-semibold">
            Hébergement
          </h2>
          <p className="text-ios-secondary">
            Hébergeur à préciser lors de la mise en production. En développement
            local, le site est servi via Next.js.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-foreground text-base font-semibold">
            Propriété intellectuelle
          </h2>
          <p className="text-ios-secondary">
            L&apos;ensemble des contenus (textes, visuels, marques) présentés sur
            ce site sont protégés. Toute reproduction non autorisée est
            interdite.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-foreground text-base font-semibold">
            Données personnelles
          </h2>
          <p className="text-ios-secondary">
            Le formulaire de contact est actuellement en mode démonstration :
            aucune donnée n&apos;est transmise ni stockée côté serveur. Lorsqu&apos;un
            envoi réel sera activé, une politique de confidentialité détaillée
            sera publiée.
          </p>
        </section>
      </Card>
    </div>
  );
}
