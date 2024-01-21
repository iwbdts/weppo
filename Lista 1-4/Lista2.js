//zad2
var v = {} //= new object- referencja
//użycie operatorów . oraz [] do odwoływania się do składowych obiektu - różnice
//dla [] argumentem moze byc wyrazenie/klucz ze spacja, dla . nie
v.foo =1;
console.log(v.foo)
v["foo"] = 2;
console.log(v.foo)
v["fo"+"o"] = 3; 
console.log(v.foo)
//użycie argumentów innego typu niż string dla operatora [] dostępu do składowej obiektu - liczby/innego obiektu
var p = {}
console.log(Object.keys(v)) //['foo']
v[2] = "abc"    
console.log(Object.keys(v)) //['2', 'foo']
console.log(v[2])           // 'abc'
v[false] = 3
console.log(Object.keys(v))
console.log(v[false])
v[p] = "p"  // -> p obiektem -> p na string to [object Object]
console.log(Object.keys(v))
// zamiana na string -> string kluczem
//użycie argumentów innego typu niż number dla operatora [] dostępu do tablicy.
const lista = ["a", "b", "c", "d"]
console.log(lista[0])
console.log(lista["abc"]) //undefined
lista["abc"] = "e"
console.log(lista["abc"]) //e
console.log(lista)  //['a', 'b', 'c', 'd', abc: 'e'], element "e" poprzedzony kluczem
console.log(lista[true])  //undefined
lista[true] = "f"
console.log(lista[true])  //['a', 'b', 'c', 'd', abc: 'e', true: 'f'] 
console.log(lista)
lista.length = 12
console.log(lista.length)
console.log(lista)
lista.length = 3
console.log(lista.length) //['a', 'b', 'c', abc: 'e', true: 'f'] - element 'd' zostal usuniety
console.log(lista)
lista.length = 2
console.log(lista.length) //['a', 'b', abc: 'e', true: 'f'] - element 'c' zostal usuniety
console.log(lista)
lista[p] = "p"
console.log(lista) // ['a', 'b', 'c', abc: 'e', true: 'f', [object Object]: 'p']
console.log(lista.length) //wart lista.length nie zminila sie po dodaniu nowego elementu
lista[1.4] = "x" //zaokr do 2
console.log(lista) // ['a', 'b', 'x', abc: 'e', true: 'f', [object Object]: 'p']

//zad3
console.log("ZAD3")
console.log( (![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]] );

let f = (![]+[])[+[]]
// ![]+[] = false ( [] + [] - 0 -> 0 = true => !0 = 1 -> false); 
// +[] = 0

let a = (![]+[])[+!+[]]
// !+[] = true (true = 0) => +true = 0

let i = ([![]]+[][[]])[+!+[]+[+[]]]
// [![]] false
// [][[]] unidentified
// [![]]+[][[]] falseunidentified 
// [[]] Array(0)
// [][[]] z pierwszej tablicy wyciagamy element z indeksu [[]], ktory nie jest indeksem wiec undefined
// [+!+[]+[+[]]] = "10" (+[] = 0 = false => !+[] = true => +!+[] = 1)
//                      + ( +[] = 0 ) +. "1" + "0" = "10"
// "falseunindentified"[10] = i

let l = (![]+[])[!+[]+!+[]]
// ![]+[] = false 
console.log(!+[])

console.log("ZAD4")
// typeof obj:
//zwraca typ danych obj
//rozroznia typy podstawowe (prymitywne): boolean, number, bigint, string, symbol, function, object, undefined
// new Type() -> object
// obj instanceof constr:
// zwraca true/false w zaleznosci czy obj jest tworzony za pomoca konstruktora constr

const b = "string"
const c = new String("string")

console.log(typeof b) //"string"
console.log(typeof c) //"object"

console.log(b instanceof String) //false
console.log(c instanceof String) //true

//zad5
// _name - private property, name- public property
var person = {

    age: 25,
    get name(){
        return this._name
    },
    set name(n){
        this._name = n
    },
    toString: function(){
        return this.name+", lat "+ this.age
    }
}

person.year = 2
person.name = "Jan"
console.log(Object.keys(person))
console.log(person.name)
console.log(person.toString())
person.name = "Ania"
console.log(person.name)
console.log(person.toString())
