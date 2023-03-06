let user = null;

alert(user?.address);
alert(user?.address.street);

// let user = null;

// console.log(user.address ? user.address.street : undefined);

//Here is the safe way to write the above code using "IF" props

let userInfo = null;
console.log(userInfo?.address?.street); //here  we use an "IF" will return undefined insteadof proving an error

let key = "firstName";

let user1 = {
  firstName: "John",
};

let user2 = null;

alert(user1?.[key]); // John
alert(user2?.[key]); //Undefined

delete user?.name; // delete user.name if user exists
