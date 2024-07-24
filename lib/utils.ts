import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function textToSlug(text: string) {
  return text
    .toLowerCase() // Convert to lowercase
    .trim() // Trim whitespace from both ends
    .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except hyphens
    .replace(/\-\-+/g, '-'); // Replace multiple hyphens with a single hyphen
}

export const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
});