//As  the new object allo us to construct ne things
// function user(name) {
//   this.name = name;
//   this.isAdmin = true;
// }
// let info = new user("Akash");
// console.log(info.name); //Akash
// let inform = new user("Pavi");
// console.log(inform.name); //Pavi

// function details(name) {
//   this.name = name;
//   this.sayHi = function () {
//     console.log("My Name is :" + this.name);
//   };
// }
// let Akash = new details("Akash");
// console.log(Akash);
// Akash.sayHi();

// let object = {};

// function A() {
//   return object;
// }
// function B() {
//   return Object;
// }
// console.log(new A() == new B());
// let a = new A();
// let b = new B();

// console.log(a == b);

// let obj = {};

// function A() {
//   return obj;
// }
// function B() {
//   return obj;
// }

// console.log(new A() == new B()); // true

let object = {};

function A() {
  return object;
}
function B() {
  return object;
}

console.log(new A() == new B());

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}

let accumulator = new Accumulator(5);
accumulator.read();
accumulator.read();
alert(accumulator.value);
