//zad2
function fib(n: number): number {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  } else {
    return 1;
  }
}

//bierze funkcję num -> num i zwraca funkcję num -> num
function memo(f: (n: number) => number): (n: number) => number {
  var cache: number[] = [];

  return function (n: number): number {
    if (cache[n] === undefined) {
      var f_n = f(n);
      cache[n] = f_n;
      return f_n;
    } else {
      return cache[n];
    }
  };
}

var memo_fib = memo(fib);

// console.log(fib(30));
// console.log(fib(40));
