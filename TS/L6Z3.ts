//zad3

function forEach<T>(a: T[], f: (a: T) => void) {
  for (let i = 0; i < a.length; i++) {
    f(a[i]);
  }
}

function map<T, U>(a: T[], f: (a: T) => U): U[] {
  let b: U[] = [];
  for (let i = 0; i < a.length; i++) {
    b[i] = f(a[i]);
  }
  return b;
}

function filter<T>(a: T[], f: (t: T) => boolean): T[] {
  let b: T[] = [];
  for (let i = 0; i < a.length; i++) {
    if (f(a[i])) {
      b.push(a[i]);
    }
  }
  return b;
}

var lista: number[] = [-1, 2, -3, 4, -5];

function out(o: any) {
  console.log(o);
}

function add_one(n: number) {
  return n + 1;
}

function isPositive(n: number): boolean {
  return n > 0;
}

// forEach(lista, out);
// console.log(map(lista, add_one));
// console.log(filter(lista, isPositive));
