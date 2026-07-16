import { getCategoryBySlug } from "@/data/mock-categories";
import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: "prod-1",
    slug: "ecran-iphone-15",
    name: "Écran OLED iPhone 15",
    shortDescription:
      "Remplacement OLED haute luminosité, True Tone compatible.",
    description:
      "Écran OLED de remplacement pour iPhone 15. Luminosité élevée, couleurs fidèles et compatibilité True Tone. Livré avec kit de pose basique et garantie 12 mois pièces et main-d'œuvre lorsque l'installation est réalisée en atelier.",
    price: 189,
    currency: "EUR",
    categoryId: "cat-ecrans",
    featured: true,
    images: [
      {
        src: "/images/produits/ecran-iphone-15-1.svg",
        alt: "Écran OLED iPhone 15 — face avant",
      },
      {
        src: "/images/produits/ecran-iphone-15-2.svg",
        alt: "Écran OLED iPhone 15 — détail",
      },
    ],
  },
  {
    id: "prod-2",
    slug: "ecran-samsung-s24",
    name: "Écran AMOLED Galaxy S24",
    shortDescription: "Panneau AMOLED original-like pour Galaxy S24.",
    description:
      "Écran AMOLED pour Samsung Galaxy S24. Tactile réactif, résolution Full HD+ et finition soignée. Idéal pour une réparation professionnelle en atelier Screentech.",
    price: 219,
    currency: "EUR",
    categoryId: "cat-ecrans",
    featured: true,
    images: [
      {
        src: "/images/produits/ecran-samsung-s24-1.svg",
        alt: "Écran AMOLED Galaxy S24",
      },
    ],
  },
  {
    id: "prod-3",
    slug: "verre-trempe-universel",
    name: "Verre trempé 9H universel",
    shortDescription: "Protection d'écran 9H, anti-rayures et anti-traces.",
    description:
      'Verre trempé 9H compatible avec la plupart des smartphones 6,1" à 6,7". Pose facile, bords 2.5D et résistance aux chocs du quotidien. Lot de 2 pièces.',
    price: 14.9,
    currency: "EUR",
    categoryId: "cat-coques",
    featured: true,
    images: [
      {
        src: "/images/produits/verre-trempe-1.svg",
        alt: "Verre trempé universel",
      },
    ],
  },
  {
    id: "prod-4",
    slug: "coque-silicone-iphone",
    name: "Coque silicone MagSafe iPhone",
    shortDescription: "Coque douce au toucher, compatible MagSafe.",
    description:
      "Coque en silicone premium compatible MagSafe pour iPhone 13 à 15. Protection des angles renforcée, microfibres intérieures anti-rayures et finition mate anti-traces.",
    price: 29.9,
    currency: "EUR",
    categoryId: "cat-coques",
    featured: false,
    images: [
      {
        src: "/images/produits/coque-silicone-1.svg",
        alt: "Coque silicone MagSafe",
      },
      {
        src: "/images/produits/coque-silicone-2.svg",
        alt: "Coque silicone — vue arrière",
      },
    ],
  },
  {
    id: "prod-5",
    slug: "batterie-iphone-13",
    name: "Batterie iPhone 13",
    shortDescription: "Batterie 3227 mAh, cycle de charge optimisé.",
    description:
      "Batterie de remplacement pour iPhone 13, capacité nominale 3227 mAh. Testée avant expédition, avec connecteur d'origine et adhésifs inclus. Garantie 6 mois.",
    price: 49.9,
    currency: "EUR",
    categoryId: "cat-batteries",
    featured: true,
    images: [
      {
        src: "/images/produits/batterie-iphone-13-1.svg",
        alt: "Batterie iPhone 13",
      },
    ],
  },
  {
    id: "prod-6",
    slug: "batterie-pixel-8",
    name: "Batterie Google Pixel 8",
    shortDescription: "Batterie haute capacité pour Pixel 8.",
    description:
      "Batterie de remplacement pour Google Pixel 8. Capacité conforme aux spécifications constructeur, montage soigné recommandé en atelier pour préserver l'étanchéité.",
    price: 54.9,
    currency: "EUR",
    categoryId: "cat-batteries",
    featured: false,
    images: [
      {
        src: "/images/produits/batterie-pixel-8-1.svg",
        alt: "Batterie Google Pixel 8",
      },
    ],
  },
  {
    id: "prod-7",
    slug: "chargeur-gan-65w",
    name: "Chargeur GaN 65 W USB-C",
    shortDescription: "Charge rapide multi-appareils, format compact.",
    description:
      "Chargeur GaN 65 W avec ports USB-C. Charge rapide pour smartphone, tablette et ordinateur portable. Protection contre surtension et surchauffe. Câble USB-C 1 m inclus.",
    price: 39.9,
    currency: "EUR",
    categoryId: "cat-accessoires",
    featured: true,
    images: [
      {
        src: "/images/produits/chargeur-gan-1.svg",
        alt: "Chargeur GaN 65 W",
      },
    ],
  },
  {
    id: "prod-8",
    slug: "cable-usb-c-tresse",
    name: "Câble USB-C tressé 2 m",
    shortDescription: "Câble renforcé, transfert et charge jusqu'à 100 W.",
    description:
      "Câble USB-C vers USB-C tressé nylon, longueur 2 m. Compatible Power Delivery jusqu'à 100 W et transfert de données USB 2.0. Embouts renforcés anti-cassure.",
    price: 16.9,
    currency: "EUR",
    categoryId: "cat-accessoires",
    featured: false,
    images: [
      {
        src: "/images/produits/cable-usb-c-1.svg",
        alt: "Câble USB-C tressé",
      },
    ],
  },
  {
    id: "prod-9",
    slug: "ecran-ipad-air",
    name: "Écran LCD iPad Air",
    shortDescription: "Dalle LCD pour iPad Air 4 / 5.",
    description:
      "Écran LCD de remplacement pour iPad Air (4e et 5e génération). Image claire, tactile précis. Installation recommandée par un technicien qualifié.",
    price: 159,
    currency: "EUR",
    categoryId: "cat-ecrans",
    featured: false,
    images: [
      {
        src: "/images/produits/ecran-ipad-air-1.svg",
        alt: "Écran LCD iPad Air",
      },
    ],
  },
  {
    id: "prod-10",
    slug: "coque-antichoc-universelle",
    name: "Coque antichoc universelle",
    shortDescription: "Protection renforcée coins et dos, grip texturé.",
    description:
      'Coque antichoc semi-rigide adaptée aux smartphones 6,1"–6,7". Coins amortisseurs, dos texturé antidérapant et découpes précises pour boutons et ports.',
    price: 24.9,
    currency: "EUR",
    categoryId: "cat-coques",
    featured: false,
    images: [
      {
        src: "/images/produits/coque-antichoc-1.svg",
        alt: "Coque antichoc universelle",
      },
    ],
  },
  {
    id: "prod-11",
    slug: "ecouteurs-bluetooth-pro",
    name: "Écouteurs Bluetooth Pro",
    shortDescription: "Autonomie 28 h, réduction de bruit active.",
    description:
      "Écouteurs true wireless avec réduction de bruit active, mode transparence et autonomie totale jusqu'à 28 h avec le boîtier. Résistance IPX4, charge USB-C.",
    price: 79.9,
    currency: "EUR",
    categoryId: "cat-accessoires",
    featured: true,
    images: [
      {
        src: "/images/produits/ecouteurs-pro-1.svg",
        alt: "Écouteurs Bluetooth Pro",
      },
      {
        src: "/images/produits/ecouteurs-pro-2.svg",
        alt: "Écouteurs Bluetooth Pro — boîtier",
      },
    ],
  },
  {
    id: "prod-12",
    slug: "batterie-externe-10000",
    name: "Batterie externe 10 000 mAh",
    shortDescription: "Power bank compacte, charge rapide 22,5 W.",
    description:
      "Batterie externe 10 000 mAh avec charge rapide 22,5 W. Deux ports (USB-A et USB-C), affichage LED du niveau de charge. Parfaite pour la journée en déplacement.",
    price: 34.9,
    currency: "EUR",
    categoryId: "cat-accessoires",
    featured: false,
    images: [
      {
        src: "/images/produits/batterie-externe-1.svg",
        alt: "Batterie externe 10 000 mAh",
      },
    ],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter((product) => product.categoryId === categoryId);
}

export function getProductsByCategorySlug(categorySlug: string): Product[] {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return [];
  return getProductsByCategory(category.id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function formatPrice(
  price: number,
  currency: Product["currency"] = "EUR",
): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency,
  }).format(price);
}
