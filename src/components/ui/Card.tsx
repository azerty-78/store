import { cn } from "@/lib/cn";
import type { HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "bg-ios-surface shadow-ios-soft rounded-2xl p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
