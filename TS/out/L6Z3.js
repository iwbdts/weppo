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
var lista = [-1, 2, -3, 4, -5];
function out(o) {
    console.log(o);
}
function add_one(n) {
    return n + 1;
}
function isPositive(n) {
    return n > 0;
}
// forEach(lista, out);
// console.log(map(lista, add_one));
// console.log(filter(lista, isPositive));
//# sourceMappingURL=L6Z3.js.map