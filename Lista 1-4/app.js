var p = {
    toString: function(){
        return'17';
    },
    valueOf: function(){
        return'9';
    }
}
var q = {}
q[p] = 1;
console.log(Object.keys(q));
console.log("HALO") //F5 run
var a = {};
a.foo = 3;
a.foo.bar = 1; //bez powyższej linijki wywołuje błąd- a.foo jest Undefined, Undefined nie ma składowych

