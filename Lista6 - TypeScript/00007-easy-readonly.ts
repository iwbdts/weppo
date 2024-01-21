// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils";

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

// ============= Your Code Here =============
//tworzy nowy typ z kluczami typu T jako readonly
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
//keyof T - unia wszystkich kluczy typu T
