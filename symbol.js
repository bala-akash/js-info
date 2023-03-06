let a = Symbol();
let b = Symbol("a");
console.log(a); //Symbol()
console.log(b); //Symbol(a)
//Here this description tag define the descriptive content which is placed inside an element
console.log(a.description); //Undefined
console.log(b.description); //a
console.log(a == b);

var obj = {
  [Symbol()]: "Akash",
};
var obj1 = {
  [Symbol()]: "Akash Channel",
};
var obj3 = { ...obj, ...obj1 };
console.log(obj3);

var obj4 = {
  name: "Akash",
  category: "Youtube Channel",
  name: "Akash 1",
};
console.log(obj4);
