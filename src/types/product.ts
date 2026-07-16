export type ProductImage = {
  src: string;
  alt: string;
};

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  currency: "EUR";
  categoryId: string;
  images: ProductImage[];
  featured: boolean;
};
