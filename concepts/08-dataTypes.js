// Primitive  (call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
const score1 = 100;

// Statically typed is a programming language characteristic in which variable types are explicitly declared and thus are determined at compile time. This lets the compiler decide whether a given variable can perform the actions requested from it or not.
//const score2:number = 100;

const outsidetemp = null;
let userEmail; // = undefined or leave it

const Id = Symbol('123');
console.log(Id);

const anotherId = Symbol('123');
console.log(anotherId);

console.log(Id === anotherId); // false (return value are not same)

const bigNumber = 1234567890098765432123456789n; // bigInt

// Reference (Non primitive)

// Array, Objects, functions

const heroes = ['shaktiman', 'nagrrraj', 'doga'];

let myObj = {
  name: 'sumit',
  age: 21,
};

const myFunction = function () {
  console.log('Hello World');
};

console.log(typeof bigNumber); // bigint
console.log(typeof outsidetemp); // object
// Array
console.log(typeof heroes); // object
// object
console.log(typeof myObj); // object
// function
console.log(typeof myFunction); // function || function object
