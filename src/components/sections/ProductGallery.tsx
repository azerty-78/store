"use client";

import { useState } from "react";
import Image from "next/image";
import type { ProductImage } from "@/types/product";
import { cn } from "@/lib/cn";

type ProductGalleryProps = {
  images: ProductImage[];
  productName: string;
};

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];

  if (!active) {
    return (
      <div className="bg-ios-gray-fill aspect-square rounded-3xl" aria-hidden />
    );
  }

  return (
    <div className="space-y-3">
      <div className="bg-ios-gray-fill relative aspect-square overflow-hidden rounded-3xl">
        <Image
          src={active.src}
          alt={active.alt || productName}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
      {images.length > 1 ? (
        <ul className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, index) => (
            <li key={`${image.src}-${index}`}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl",
                  "ring-offset-ios-bg focus-visible:ring-ios-blue focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
                  index === activeIndex
                    ? "ring-ios-blue ring-2"
                    : "opacity-70 hover:opacity-100",
                )}
                aria-label={`Voir l'image ${index + 1}`}
                aria-pressed={index === activeIndex}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
