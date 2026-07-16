import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  // Combine conditional classNames, then merge Tailwind conflicts.
  return twMerge(clsx(inputs));
}
