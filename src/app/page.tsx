import { cn } from "@/lib/cn";

export default function Home() {
  return (
    <main className={cn("flex-1 bg-zinc-50 p-6", "dark:bg-black")}>
      <h1
        className={cn(
          "text-2xl font-semibold text-zinc-900",
          "dark:text-zinc-50",
        )}
      >
        Page d'accueil minimale
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        Le contenu réel du site arrivera aux prochains prompts.
      </p>
    </main>
  );
}
