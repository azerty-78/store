import Link from "next/link";
import { cn } from "@/lib/cn";

const footerLinks = [
  { href: "/catalogue", label: "Catalogue" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
  { href: "/mentions-legales", label: "Mentions légales" },
];

export function Footer() {
  return (
    <footer
      className={cn(
        "mt-auto border-t border-black/5 dark:border-white/10",
        "bg-ios-surface/50 px-4 py-8",
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="text-foreground text-sm font-medium">Screentech</p>
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ios-secondary hover:text-ios-blue text-xs transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-ios-secondary text-xs">
          © {new Date().getFullYear()} Screentech — Site vitrine e-commerce
        </p>
      </div>
    </footer>
  );
}
