import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { formatPrice } from "@/data/mock-products";
import type { Product } from "@/types/product";
import { cn } from "@/lib/cn";

type ProductCardProps = {
  product: Product;
  categoryName?: string;
  className?: string;
};

export function ProductCard({
  product,
  categoryName,
  className,
}: ProductCardProps) {
  const image = product.images[0];

  return (
    <Link href={`/produit/${product.slug}`} className={cn("block", className)}>
      <Card className="h-full overflow-hidden p-0 transition-transform hover:scale-[1.01]">
        <div className="bg-ios-gray-fill relative aspect-square">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
            />
          ) : null}
        </div>
        <div className="space-y-2 p-4">
          {categoryName ? (
            <Badge variant="info" className="text-[10px]">
              {categoryName}
            </Badge>
          ) : null}
          <h3 className="text-foreground line-clamp-2 text-sm font-semibold">
            {product.name}
          </h3>
          <p className="text-ios-secondary line-clamp-2 text-xs">
            {product.shortDescription}
          </p>
          <p className="text-ios-blue text-base font-bold">
            {formatPrice(product.price, product.currency)}
          </p>
        </div>
      </Card>
    </Link>
  );
}
