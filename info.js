"use strict";
Task-1
let userName = "john";
let admin = userName;
alert(admin);
// Task-2
alert(NaN ** 0);
alert(10 / 0);
alert("not a number" / 2);
let ageAkash = prompt("how old are you?", 23);
alert(`You are ${ageAkash} years old`);
let age = confirm(`Is your age is ${ageAkash}?`);
if (age === true) alert("welcome");
else if (age == false) {
  alert("oops! sorry something went wrong");
}
let y = -2;
alert(-y);
let a = 1,
  b = 1;
let c = ++a;
// here C=prefix '+' so 1+1=2
let d = b++;
B=Postfix '+' so b=1
// task-3
let a = prompt("First number?", Number(1));
let b = prompt("Second number?", Number(2));

alert(+a + +b);

let userName = prompt("Who are you?", "");
if (userName === "Admin") {
  let loginPassword = prompt("please enter your password", "");
  if (loginPassword === "TheMaster") {
    alert("welcome!");
  } else {
    alert("Please enter the valid password!!!");
  }
} else {
  alert("oops! you are not my boss sorry");
}
