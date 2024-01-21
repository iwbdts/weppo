//zad2
function fib(n) {
    if (n > 1) {
        return fib(n - 1) + fib(n - 2);
    }
    else {
        return 1;
    }
}
//bierze funkcję num -> num i zwraca funkcję num -> num
function memo(f) {
    var cache = [];
    return function (n) {
        if (cache[n] === undefined) {
            var f_n = f(n);
            cache[n] = f_n;
            return f_n;
        }
        else {
            return cache[n];
        }
    };
}
var memo_fib = memo(fib);
// console.log(fib(40));
// console.log(fib(45));
//zad3
function forEach(a, f) {
    for (var i = 0; i < a.length; i++) {
        f(a[i]);
    }
}
function map(a, f) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        b[i] = f(a[i]);
    }
    return b;
}
function filter(a, f) {
    var b = [];
    for (var i = 0; i < a.length; i++) {
        if (f(a[i])) {
            b.push(a[i]);
        }
    }
    return b;
}
var lista = [1, 2, 3, 4, 5];
function out(o) {
    console.log(o);
}
function add_one(n) {
    return n + 1;
}
// forEach(lista, out); //działa
console.log(map(lista, add_one));
//# sourceMappingURL=L6.js.map