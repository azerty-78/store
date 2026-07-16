import { cn } from "@/lib/cn";

export function Footer() {
  return (
    <footer
      className={cn(
        "mt-auto border-t border-black/5 dark:border-white/10",
        "bg-ios-surface/50 px-4 py-8",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 text-center">
        <p className="text-foreground text-sm font-medium">Store</p>
        <p className="text-ios-secondary text-xs">
          © {new Date().getFullYear()} — Site vitrine e-commerce
        </p>
      </div>
    </footer>
  );
}
