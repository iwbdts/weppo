//zad1
function getLastProto(o) {
  var p = o;
  do {
    o = p;
    p = Object.getPrototypeOf(o);
  } while (p);
  return o;
}

var p = {
  name: "jan",
};
var q = {
  surname: "kowalski",
};
Object.setPrototypeOf(p, q);

console.log(getLastProto(p) == Object.getPrototypeOf(q));
var s = String("a");
var n = Number(10);
var b = false;
console.log(getLastProto(s) === getLastProto(n));
console.log(getLastProto(s) === getLastProto(b));
console.log(getLastProto(b));
//zad2

function from_object(obj, name) {
  obj_properties = Object.keys(obj);
  obj_proto_properties = Object.keys(Object.getPrototypeOf(obj));
  for (let i = 0; i < obj_properties.length; i++) {
    if (name === obj_properties[i]) {
      return true;
    }
  }
  for (let i = 0; i < obj_proto_properties.length; i++) {
    if (name === obj_proto_properties[i]) {
      return false;
    }
  }
  console.error("Error: ", "no such property");
}

// console.log(from_object(p, "surname"));
// console.log(from_object(p, "name"));
// console.log(from_object(p, "age"));

//zad3

var Person = function (name) {
  this.name = name;
};
Person.prototype.say = function () {
  return this.name;
};

var person = new Person("jan");

var Worker = function (name, age) {
  Person.call(this, name);
  this.age = age;
};

//Worker.prototype = Person.prototype - oba prototypy są jednym obiektem,
//dodanie metody do worker prototype skutkuje dodaniem metody do person prototype
Worker.prototype = Object.create(Person.prototype);

Worker.prototype.say = function () {
  var z = Person.prototype.say.call(this);
  return `${z} ${this.age}`;
};

var worker = new Worker("adam", 20);
// console.log(worker.say());

function Person2() {
  this.property = "123";
  this.skills = [];
}

function Employee() {
  this.job = "Default Job";
}

// Incorrect inheritance setup
Employee.prototype = new Person2();
//Wywołuje konstruktor
// When SomeBaseClass has a function body, this would get executed with the new keyword.
// This usually is not intended - you only want to set up the prototype chain.
const alice = new Employee();
const bob = new Person2();

alice.skills.push("JavaScript");

console.log(alice.property);
console.log(bob.property);

//zad4
var n = 1;
// liczba ma prototyp?
// console.log(typeof Object.getPrototypeOf(n));
// można jej dopisać pole/funkcję?
n.foo = "foo";
// console.log(Object.keys(n)); //-> []
// console.log(n.foo); //-> undefined

//zad6

function Tree(val, left, right) {
  this.left = left;
  this.right = right;
  this.val = val;
}
// Tree.prototype[Symbol.iterator] = function* () {
//   yield this.val;
//   if (this.left) yield* this.left;
//   if (this.right) yield* this.right;
// };
Tree.prototype[Symbol.iterator] = function* () {
  const queue = [this];
  while (queue.length > 0) {
    var cur_node = queue.splice(0, 1)[0]; // zdejmowanie elementu z początku kolejki
    if (cur_node.left) {
      queue.push(cur_node.left); //lewy podwęzeł na koniec kolejki
    }
    if (cur_node.right) {
      queue.push(cur_node.right); //prawy podwęzeł na koniec kolejki
    }

    yield cur_node.val;
  }
};

var root = new Tree(
  1,
  new Tree(2, new Tree(3, new Tree(6)), new Tree(5)),
  new Tree(4)
);
// for (var e of root) {
//   console.log(e);
// }
