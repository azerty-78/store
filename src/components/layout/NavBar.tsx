import Link from "next/link";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/demo", label: "Design system" },
];

export function NavBar() {
  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full",
        "border-b border-black/5 dark:border-white/10",
        "bg-ios-surface/70 backdrop-blur-xl backdrop-saturate-150",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="text-ios-blue text-lg font-bold tracking-tight transition-opacity hover:opacity-80"
        >
          Store
        </Link>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-foreground rounded-full px-4 py-2 text-sm font-medium",
                  "hover:bg-ios-gray-fill/80 transition-colors",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
