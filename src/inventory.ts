import { calcAverageProductPrice, Product } from "./products";

export interface InventoryItem {
  product: Product;
  quantity: number;
}

const inventory = [
  { product: { name: "motor", price: 10 }, quantity: 10 },
  { product: { name: "sensor", price: 12.5 }, quantity: 4 },
  {
    product: {
      name: "LED",
      price: 1,
    },
    quantity: 20,
  },
];

export function calcInventoryValue(array: InventoryItem[]): number {
  let total: number = 0;
  if (array.length !== 0) {
    for (let products of array) {
      total += products.product.price * products.quantity;
    }
    return total;
  }
  return 0;
}

console.log(calcInventoryValue(inventory));
console.log(calcInventoryValue([]));
