import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { MobileTabBar } from "@/components/layout/MobileTabBar";
import { NavBar } from "@/components/layout/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Screentech",
    template: "%s",
  },
  description:
    "Screentech — vitrine de pièces, écrans et accessoires smartphone. Devis gratuit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-ios-bg text-foreground flex min-h-full flex-col font-sans antialiased">
        <NavBar />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <Footer />
        <MobileTabBar />
      </body>
    </html>
  );
}
