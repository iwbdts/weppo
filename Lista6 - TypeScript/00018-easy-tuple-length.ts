// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];

// ============= Your Code Here =============
type Length<T extends readonly any[]> = T["length"];

//as const - sprawia ze lista/tupla jest readonly
// const Arr = [1,2,3] -> można dodawać elementy, zmieniać wartości elementów, nie można nadpisać całej listy Arr - [4,5,6]
// readonly Array<number> = [1,2,3] nie można nic dodać, usunąć z listy, nie tykać, trzeba określić typ
