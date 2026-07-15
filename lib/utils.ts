export function formatPrice(price: number): string {
  return `${price.toLocaleString("fa-IR")} تومان`;
}

export function cn(...classes: (string | false | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
