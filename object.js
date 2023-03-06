// All about object
let use = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax

let userDetail = {
  // an object
  name: "Akash", // by key "name" store value "Akash"
  age: 23, // by key "age" store value 23
};
// get property values of the object:
alert(userDetail.name); // Akash
alert(userDetail.age); // 23
alert(userDetail.name === "Akash");
//we can add a Boolean value

// if we want to delete any file we can use delete keyword

delete userDetail.age;

// We can also use multiword property names, but then they must be quoted:

let userDetails = {
  name: "Akash",
  age: 23,
  "likes coding": true, // multiword property name must be quoted
};

//  We cannot access a multiword property like userDetails.likes coding----> as it will show errors and here how we can fix it!

let userDetailss = {};

// set
userDetailss["likes birds"] = true;

// get
alert(userDetailss["likes birds"]); // true

// delete
delete userDetailss["likes birds"];

// Example
let userName1 = {
  firstName: "Akash",
  age: 23,
};
let userName2 = {
  firstName: "Pavi",
  age: 27,
};

let key = prompt("What do you want to know about the user?", "");
if (key === userName1.firstName) {
  alert(`This is Mr.${userName1.firstName}`);
  alert(`His age is ${userName1.age} `);
}
if (key === firstName) {
  alert(userName[age]);
} else {
  alert("you have entered nothing");
}
let key2 = prompt("What do you want to know about the user?", "");
if (key2 === userName2.firstName) {
  alert(`This is Mr.${userName2.firstName}`);
  alert(`His age is ${userName2.age} `);
}

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"

// The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit
// So, if a visitor enters "apple", bag will become {apple: 5}

let fruits = prompt("which fruit do you want to buy?", "Banana");
let bags = {};
let results = (bags[fruits] = 5);
alert(`you have choosen ${results} ${fruits}`);

let brand = "apple";
let system = {
  [brand + "Computers"]: 5, // system.appleComputers = 5
};

let makeUser = (name, age) => {
  return {
    name: name,
    age: age,
  };
};
let user = makeUser("Bala Akash", 23);
alert(user.name);
alert(user.age);

// "in"=> concepts

let user = makeUser("Akash", 23);
alert("age" in user);
alert("name" in user);
// Please note that on the left side of in there must be a property name. That’s usually a quoted string

// =>> for...in loop which is totally different from for(;;)

/* The syntax is=> for("key" in 'object') */

let userInfo = {
  name: "Akash",
  age: 23,
  mail: "akash@gmail.com",
};

for (let info in userInfo) {
  alert(info);
  alert(userInfo[info]);
}

let ordering = {
  "+4": "India",
  5: "Pakistan",
  2: "Canada",
  9: "Germany",
  1: "USA",
  3: "China",
};
for (let order /*key*/ in ordering /*object*/) {
  alert(order);
  alert(ordering[order]);
}
/* Here if we dont want any kind of ascending arrangement then we should add just '+' before the number
for eg;
    4:"Pakistan"=> this will be  written as "+4":"Pakistan"*/
