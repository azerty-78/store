import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type HeroProps = {
  className?: string;
};

export function Hero({ className }: HeroProps) {
  return (
    <section
      className={cn(
        "from-ios-blue relative overflow-hidden rounded-3xl bg-gradient-to-br to-[#0051D4] px-6 py-14 text-white sm:px-10 sm:py-20",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-black/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-2xl space-y-5 text-center sm:text-left">
        <p className="text-sm font-medium tracking-wide text-white/80">
          Screentech
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Réparation &amp; accessoires, soigneusement sélectionnés
        </h1>
        <p className="text-base text-white/85 sm:text-lg">
          Pièces, écrans et accessoires pour smartphones — conseils experts,
          devis gratuit, sans paiement en ligne.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
          <Link href="/catalogue">
            <Button className="text-ios-blue min-w-44 bg-white hover:bg-white/90 active:bg-white/80">
              Voir le catalogue
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="ghost"
              className="min-w-44 text-white hover:bg-white/15 active:bg-white/20"
            >
              Nous contacter
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
