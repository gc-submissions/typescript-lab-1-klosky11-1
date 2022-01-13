export interface Product {
  name: string;
  price: number;
}

const products: Product[] = [
  {
    name: "Lectric eBike",
    price: 999,
  },
  { name: "Heybike", price: 849 },
  {
    name: "Beecool Bike",
    price: 1599,
  },
];

export function calcAverageProductPrice(array: Product[]): number {
  let total: number = 0;
  let average: number = 0;
  if (array.length !== 0) {
    for (let products of array) {
      total += products.price;
    }
    average = total / array.length;
    // return average;
  }
  return average;
}

console.log(calcAverageProductPrice(products));
console.log(calcAverageProductPrice([]));
