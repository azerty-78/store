"use client";

import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Sheet } from "@/components/ui/Sheet";
import { TextArea } from "@/components/ui/TextArea";
import { cn } from "@/lib/cn";

function DemoSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-foreground text-lg font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export function DesignSystemDemo() {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 py-8">
      <header className="space-y-2">
        <Badge variant="info">Design system iOS</Badge>
        <h1 className="text-foreground text-3xl font-bold tracking-tight">
          Composants UI
        </h1>
        <p className="text-ios-secondary max-w-2xl">
          Démo temporaire des composants de base. Faites défiler la page pour
          tester la navbar translucide et réduisez la fenêtre pour voir la tab
          bar mobile.
        </p>
      </header>

      {/* Scroll test blocks for navbar blur */}
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="bg-ios-blue/20 h-24 rounded-2xl" />
        <div className="bg-ios-green/20 h-24 rounded-2xl" />
        <div className="bg-ios-red/20 h-24 rounded-2xl" />
      </div>

      <DemoSection title="Boutons">
        <Card className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
        </Card>
      </DemoSection>

      <DemoSection title="Badges">
        <Card className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="danger">Danger</Badge>
        </Card>
      </DemoSection>

      <DemoSection title="Champs de saisie">
        <Card className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="demo-input"
              className="text-foreground text-sm font-medium"
            >
              Input standard
            </label>
            <Input
              id="demo-input"
              placeholder="Votre nom"
              autoComplete="name"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="demo-search"
              className="text-foreground text-sm font-medium"
            >
              Recherche (pill)
            </label>
            <div className="relative">
              <IoSearchOutline
                className="text-ios-secondary pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2"
                aria-hidden="true"
              />
              <Input
                id="demo-search"
                variant="pill"
                placeholder="Rechercher un produit…"
                className="pl-11"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label
              htmlFor="demo-textarea"
              className="text-foreground text-sm font-medium"
            >
              TextArea
            </label>
            <TextArea
              id="demo-textarea"
              placeholder="Votre message…"
              rows={4}
            />
          </div>
        </Card>
      </DemoSection>

      <DemoSection title="Card">
        <Card>
          <h3 className="text-foreground font-semibold">Card iOS</h3>
          <p className="text-ios-secondary mt-2 text-sm">
            Coins arrondis (rounded-2xl), fond surface et ombre douce — sans
            bordure dure.
          </p>
        </Card>
      </DemoSection>

      <DemoSection title="Bottom Sheet">
        <Card className="space-y-4">
          <p className="text-ios-secondary text-sm">
            Composant Sheet façon iOS pour usage mobile futur.
          </p>
          <Button variant="secondary" onClick={() => setSheetOpen(true)}>
            Ouvrir le sheet
          </Button>
        </Card>
        <Sheet
          open={sheetOpen}
          onOpenChange={setSheetOpen}
          title="Bottom Sheet"
        >
          <p className="text-ios-secondary text-sm">
            Contenu du sheet avec animation spring. Glissez ou touchez
            l&apos;arrière-plan pour fermer.
          </p>
          <div className="mt-6 flex gap-3">
            <Button className="flex-1" onClick={() => setSheetOpen(false)}>
              Confirmer
            </Button>
            <Button
              variant="ghost"
              className="flex-1"
              onClick={() => setSheetOpen(false)}
            >
              Annuler
            </Button>
          </div>
        </Sheet>
      </DemoSection>

      {/* Extra scroll content for navbar blur test */}
      <div className={cn("space-y-3 pb-8")}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Card key={index}>
            <p className="text-ios-secondary text-sm">
              Bloc de contenu #{index + 1} — faites défiler pour observer le
              flou de la navbar.
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
