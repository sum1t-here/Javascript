// singleton
// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = 'abcd1234';
tinderUser.name = 'Sumit';
tinderUser.isLoggedIn = false;

console.log(tinderUser); // { id: 'abcd1234', name: 'Sumit', isLoggedIn: false }

const regularUser = {
  email: 'sumit@google.com',
  fullname: {
    userFullName: {
      firstName: 'Sumit',
      lastname: 'Mazumdar',
    },
  },
};

console.log(regularUser.fullname); // { userFullName: { firstName: 'Sumit', lastname: 'Mazumdar' } }

// conditional chaining --> to check if value is present
console.log(regularUser.fullname?.userFullName.firstName); // Sumit

const obj1 = { 1: 'a', 2: 'b' };
const obj2 = { 3: 'c', 2: 'd' };

const obj3 = { obj1, obj2 };
console.log(obj3); // { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'd', '3': 'c' } }

const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4); // { '1': 'a', '2': 'd', '3': 'c' }

const obj5 = { ...obj1, ...obj2 }; // spread operator
console.log(obj5); // { '1': 'a', '2': 'd', '3': 'c' }

// data from databases

const users = [
  {
    id: 1,
    email: 'siuu@cr7.com',
  },
  {
    id: 1,
    email: 'siuu@cr7.com',
  },
  {
    id: 1,
    email: 'siuu@cr7.com',
  },
  {
    id: 1,
    email: 'siuu@cr7.com',
  },
  {
    id: 1,
    email: 'siuu@cr7.com',
  },
];

console.log(users[1].email); // siuu@cr7.com

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // [ 'abcd1234', 'Sumit', false ]
console.log(Object.entries(tinderUser)); // [ [ 'id', 'abcd1234' ], [ 'name', 'Sumit' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
