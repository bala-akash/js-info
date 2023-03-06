// the function syntax is given below/**/

function myFunction(/*the parameters are taken place here!*/ a, b) {
  /*here we will pass the event or actions to be carried out*/
  let c = a + b;
  console.log(c);
  alert(c);
}
myFunction(5, 5);

// an example for local scope

function localScope() {
  let num = 5;
  alert(`the given number is ${num}`);
}
localScope();

// an example for outer scope
let userName = "Akash";
function outerScope() {
  let userInfo = prompt("what is your name?", "");
  if (userInfo === userName) alert(`Welcome ${userName}!!`);
}

outerScope();
// Calling function into parameter
function callsOther(a, b = localScope()) {
  alert(a, b);
}
callsOther(10);

// Nullishing actions
// here if the parameter is empty or any value if it is undefined/ nulll it will passed to another argument
function ifOperand(count) {
  alert(
    count ??
      "The  field is empty!!!" /*<-----this argument will be passed if the count is'nt passed or defined*/
  );
}

ifOperand();
// ifOperand(5)
// ifOperand(null)----> Unknown
// ifOperand()----> Unknown

/*Returning values inside a function*/

function returnValue(num1, num2) {
  return num1 + num2;
}
/* If we need a value which is returned we can store that in a variable and then we can use whenever needed */
let result = returnValue(5, 500);
alert(result);

/* Another example */

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do your parents know?");
  }
}
let age = prompt("what is your age?");
if (checkAge(age)) {
  alert("Access confirmed");
} else {
  alert("access denied");
}

/* An empty return  */

function emptyReturn() {
  return;
}
alert(emptyReturn() === undefined);

function printPrimenumbers(n) {
  for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
  }
}

printPrimenumbers(20);

function printEvennumbers(n) {
  for (let i = 2; i <= n; i++) {
    if (i % 2 !== 0) continue;
    console.log(i);
  }
}

printEvennumbers(20);

/* TASKS */
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}
/* convert the above function into single line using ?/|| */
function checkAge(age) {
  return age > 18 ? true : confirm("do your parents know?");
}
function checkAge(age) {
  return age > 18 || confirm("do your parents know?");
}

/* Return least of two numbers */

function leastOfTwo(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function leastOfTwo() {
  return a < b ? a : b;
}
/* Here both the functions are same */

leastOfTwo(95, 105);

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}
