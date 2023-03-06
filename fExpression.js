// The below is an example for function expression as we declare a function on a variable
function sayHi() {
  alert("hi this is akash");
}
let greet = function () {
  alert("welcome");
};
greet();
sayHi();

let result = confirm("Do you agree?");
console.log(result, "result");

result ? alert("You agreed") : alert("You denied");
