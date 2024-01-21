//zad1
var a = require("./module1");
var b = require("./module2");
//a(3);

//zad 2
function zad2() {
  console.log("Jak masz na imię?");
  process.stdin.on("data", function (data) {
    console.log(`Witaj, ${data.toString()}`);
    process.exit();
  });
}
zad2();

//zad3
var rand_between = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
var game_on = true;
var target = rand_between(1, 101);
function zad3() {
  console.log("Zgadnij liczbę między 1 a 100");
  process.stdin.on("data", function (data) {
    if (data == target) {
      console.log("to jest właśnie ta liczba");
      game_on = false;
      process.exit();
    }
    if (data > target) {
      console.log("moja liczba jest mniejsza");
    }
    if (data < target) {
      console.log("moja liczba jest większa");
    }
  });
}
// zad3();
