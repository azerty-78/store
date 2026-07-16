import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Card className="space-y-4 text-center">
        <h1 className="text-foreground text-3xl font-bold tracking-tight">
          Bienvenue sur Store
        </h1>
        <p className="text-ios-secondary">
          Site vitrine e-commerce — le contenu métier arrive aux prochains
          prompts.
        </p>
        <div className="flex justify-center pt-2">
          <Link href="/demo">
            <Button>Voir le design system</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
