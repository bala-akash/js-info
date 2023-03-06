let user = {
  sayHi: function () {
    alert("Hello");
  },
};
user.sayHi();
/* which can be further written as folllows */

user = {
  sayHi() {
    alert("Hello world");
  },
};
user.sayHi(); // calling the function

let userInfo = {
  name: "Akash",
  age: 23,

  sayHi() {
    alert(this.name); //Akash
    alert(this.mail); //akash.career@gmail.com
    //as the operation can be done even without "this"
    alert(userInfo.mail);
  },
};
let addMail = {
  mail: "akash.career@gmail.com",
};
Object.assign(userInfo, addMail);
userInfo.sayHi();

// by assigning the current object to the new value and setting its value to null the the property of the object canot be accessed

let calc = {
  sum() {
    return a + b;
  },
  multi() {
    return a * b;
  },
  read() {
    a = +prompt("a?", 5);
    b = +prompt("b?", 10);
  },
};
console.log(calc.read());
console.log(calc.sum());
console.log(calc.multi());

let ladders = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    alert(this.step);
  },
};

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
// We also can write a single call per line. For long chains it’s more readable:

ladder
  .up()
  .up()
  .down()
  .showStep() // 1
  .down()
  .showStep(); // 0

let;
