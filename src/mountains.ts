export interface Mountain {
  name: string;
  height: number;
}

const mountains = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

console.log(mountains);

export function findNameOfTallestMountain(array: Mountain[]): string {
  let tallestMountainHeight: Mountain = array[0];
  if (array.length !== 0) {
    for (let mountain of array) {
      if (mountain.height > tallestMountainHeight.height) {
        tallestMountainHeight = mountain;
      }
    }
    return tallestMountainHeight.name;
  }
  return "";
}

console.log(findNameOfTallestMountain(mountains));
console.log(findNameOfTallestMountain([]));
