import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Store",
  description: "Site vitrine e-commerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
