// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

// ============= Your Code Here =============
//MyPick tworzy nowy typ z kluczami K zawartymi w typie T
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

//keyof T - unia wszystkich kluczy typu T
//K extends keyof T zaznacza że K jest podzbiorem zbioru kluczy z T
