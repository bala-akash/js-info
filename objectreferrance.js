// As of using object we can easily copy the value into the whole different one

let message = "hello";
let phrase = message;
alert(phrase); //hello

// When an object variable is copied, the reference is copied, but the object itself is not duplicated.

let user = {
  name: "Akash",
};

let admin = user;
alert(admin.name); //Akash

// Two objects are equal only if they are the same object.

let a = {};
let b = a; // copy the reference

alert(a == b); // true, both variables reference the same object
alert(a === b); // true

// And here two independent objects are not equal, even though they look alike (both are empty):

let text = {};
let content = {};

alert(text == content); //False

// Cloning and merging object

let details = {
  name: "Akash",
  age: 23,
  mail: "balaakash.career@gmial.com",
  contact: 8524837815,
};

// let's clone the above object

let clone = {}; //==> empty object

for (let info in details) {
  clone[info] = details[info];
}
clone.name = "Pavi";
clone.age = 37;
alert(clone.name);
alert(clone.age);
alert(details.name);
alert(details.age);

// As well we can able to assingn a properties into an object

let userinfo = {
  name: "Akash",
};
let addOne = {
  age: 23,
};
let addTwo = {
  mail: "balaakash.career@gmial.com",
};

// the syntax for assigning the objects is

// =====>Object.assign(...)<=====

alert(userinfo.name); //Akash
alert(userinfo.age); //Undefined
alert(userinfo.mail); //Undefined
Object.assign(userinfo, addOne, addTwo);
// the above statement represented as name:'akash',age:23,mail:'balaakash.career@gmial.com'
alert(userinfo.name); //Akash
alert(userinfo.age); //23
alert(userinfo.mail); //balaakash.career@gmial.com

let personName = { name: "Akash" };

Object.assign(user, { name: "Pavi" });

alert(user.name); //now the user name will be ====>Pavi

let detail = {
  name: "AKash",
  age: 23,
};
// Here it copies all properties of user into the empty object and returns it.

let clone = Object.assign({}, detail);

alert(clone.name); // AKash
alert(clone.age); // 23
