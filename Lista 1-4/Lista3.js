//shift alt f
//zad1
function fib(n) {
  if (n > 1) {
    return fib(n - 1) + fib(n - 2);
  } else {
    return 1;
  }
}

function memo(f) {
  var cache = {};

  return function (n) {
    if (cache[n] === undefined) {
      var f_n = f(n);
      cache[n] = f_n;
      return f_n;
    } else {
      return cache[n];
    }
  };
}

var fib = memo(fib);

// console.log(fib(40));

//zad2

function forEach(a, f) {
  for (let i = 0; i < a.length; i++) {
    f(a[i]);
  }
}

function shout(a) {
  console.log(a + "!");
}

function map(a, f) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    b[i] = f(a[i]);
  }
  return b;
}

function add_one(n) {
  return n + 1;
}

function filter(a, f) {
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (f(a[i])) {
      b.push(a[i]);
    }
  }
  return b;
}

function is_even(n) {
  return !(n % 2);
}

var a = [1, 2, 3, 4];

// forEach(a, (_) => {
//   console.log(_);
// });
// forEach(a, shout);
// console.log(a);
// [1,2,3,4]
// filter(a, (_) => _ < 3);
// console.log(filter(a, (_) => _ < 3));
// console.log(filter(a, is_even));
// [1,2]
// console.log(map(a, (_) => _ * 2));
// console.log(map(a, add_one));
// [2, 4, 6, 8];
//zad3
function createFs(n) {
  // tworzy tablicę n funkcji
  var fs = []; // i-ta funkcja z tablicy ma zwrócić i
  for (var i = 0; i < n; i++) {
    (function (i) {
      fs[i] = function () {
        return i;
      };
    })(i);
  }
  return fs;
}
var myfs = createFs(10);
console.log(myfs[0]()); // zerowa funkcja miała zwrócić 0
console.log(myfs[2]()); // druga miała zwrócić 2
console.log(myfs[7]());
// 10 10 10 // ale wszystkie zwracają 10!?

//zad4

function sum(...args) {
  let res = 0;
  for (const arg of args) {
    res = res + arg;
  }
  return res;
}
// console.log(sum(1, 2, 3));
// console.log(sum(1, 2, 3, 4, 5));

//zad5
function createGenerator(n) {
  return function () {
    var _state = 0;
    return {
      next: function () {
        return {
          value: _state,
          done: _state++ >= n,
        };
      },
    };
  };
}

var foo = {
  [Symbol.iterator]: createGenerator(10),
};
var foo1 = {
  [Symbol.iterator]: createGenerator(2),
};
var foo2 = {
  [Symbol.iterator]: createGenerator(15),
};

// for (var f of foo) console.log(f);
// for (var f of foo2) console.log(f);
//zad6
