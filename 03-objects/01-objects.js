// singleton
// -- Object.create

// object literals

const mySym = Symbol('key1');

const jsUser = {
  name: 'Sumit',
  'full name': 'Sumit Mazumdar',
  //   using symbol as key
  [mySym]: 'mykey1',
  age: '21',
  location: 'Assam',
  email: 'mazumdarsumit3@gmail.com',
  isLoggedIn: false,
  lastLoginDays: ['Monday', 'Saturday'],
};

console.log(jsUser.email); // mazumdarsumit3@gmail.com
console.log(jsUser['email']); // mazumdarsumit3@gmail.com
console.log(jsUser['full name']); // Sumit Mazumdar

// printing symbol key
console.log(jsUser[mySym]); // mykey1
console.log(typeof jsUser[mySym]); // string

jsUser.email = 'sumit@gpt.com';
// Object.freeze(jsUser); // freezes change

jsUser.email = 'sumit@faang.com';

console.log(jsUser);
// {
//     name: 'Hitesh',
//     'full name': 'Sumit Mazumdar',
//     age: '21',
//     location: 'Assam',
//     email: 'sumit@gpt.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

jsUser.greeting = function () {
  console.log('Hello User');
};

jsUser.greeting2 = function () {
  console.log(`Hello User,${this.name}`);
};

console.log(jsUser.greeting); // [Function (anonymous)] --> reference of a function
console.log(jsUser.greeting()); // Hello User
console.log(jsUser.greeting2()); // Hello User,Sumit
