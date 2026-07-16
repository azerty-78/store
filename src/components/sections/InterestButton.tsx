import Link from "next/link";
import { Button } from "@/components/ui/Button";

type InterestButtonProps = {
  productName: string;
  productSlug: string;
};

export function InterestButton({
  productName,
  productSlug,
}: InterestButtonProps) {
  const href = `/contact?sujet=${encodeURIComponent(`Intérêt pour : ${productName}`)}&produit=${encodeURIComponent(productSlug)}`;

  return (
    <Link href={href} className="block w-full sm:inline-block sm:w-auto">
      <Button className="w-full sm:w-auto">Je suis intéressé</Button>
    </Link>
  );
}
