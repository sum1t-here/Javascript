/**
 * Chedcking if an object is of certain type
 */

// use instanceof operator

const mysteryObject = new Date();

if (mysteryObject instanceof Date) {
  console.log('Date object');
} else {
  console.log('Not an date object');
}

// There’s one gap in the instanceof operator. It doesn’t work with
// primitive values, like numbers, strings, Booleans, BigInt values,
// null, and undefined.

// The solution is to use the typeof operator

const mysteryPrimitive = 42;

if (typeof mysteryPrimitive === 'number') {
  // This code runs
}
if (typeof mysteryObject === 'object') {
  // This code runs, because a Date is an object, not a primitive
  if (mysteryObject instanceof Date) {
    // This code also runs
  }
}

/**
 * Using an Object Literal to Bundle Data
 */

const employee = {
  employeeId: 402,
  firstName: 'Lisa',
  lastName: 'Stanecki',
  birthDate: new Date(1995, 8, 15),
};
console.log(employee.firstName); // 'Lisa'

/**
 * Iterating Over All the Properties of an Object
 */

const address = {
  country: 'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Worcestire Blvd',
};
const properties = Object.keys(address);
// Show every property and its value
for (const property of properties) {
  console.log(`Property: ${property}, Value: ${address[property]}`);
}

// Property: country, Value: Australia
// Property: city, Value: Sydney
// Property: streetNum, Value: 412
// Property: streetName, Value: Worcestire Blvd

// In JavaScript, there are various ways to find object properties, depending on your requirements and preferences. Here are some common methods:

// Dot notation: You can access object properties using dot notation if you know the property name in advance.

// const obj = { name: 'John', age: 30 };
// console.log(obj.name); // Output: John
// console.log(obj.age); // Output: 30

// Bracket notation: Bracket notation allows you to access object properties dynamically using a variable or an expression.

// const obj = { name: 'John', age: 30 };
// const propertyName = 'name';
// console.log(obj[propertyName]); // Output: John

// Object.keys(): The Object.keys() method returns an array of a given object's own enumerable property names.

// const obj = { name: 'John', age: 30 };
// const keys = Object.keys(obj);
// console.log(keys); // Output: ['name', 'age']

// Object.values(): The Object.values() method returns an array of a given object's own enumerable property values.

// const obj = { name: 'John', age: 30 };
// const values = Object.values(obj);
// console.log(values); // Output: ['John', 30]

// Object.entries(): The Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs.

// const obj = { name: 'John', age: 30 };
// const entries = Object.entries(obj);
// console.log(entries); // Output: [['name', 'John'], ['age', 30]]

// for...in loop: You can iterate over an object's enumerable properties using a for...in loop.

const obj = { name: 'John', age: 30 };
for (let key in obj) {
  console.log(key, obj[key]);
}

// name John
// age 30

/**
 * Merging the Properties of Two Objects
 */

const address = {
  country: 'Australia',
  city: 'Sydney',
  streetNum: '412',
  streetName: 'Worcestire Blvd',
};
const customer = {
  firstName: 'Lisa',
  lastName: 'Stanecki',
};
const customerWithAddress = { ...customer, ...address };
console.log(customerWithAddress);
// The customerWithAddress now has all six properties

/**Preventing Any Changes to an Object */

const customer = { firstName: 'Josephine', lastName: 'Stanecki' };
// freeze the object
Object.freeze(customer);
// This statement throws an error in strict mode
customer.firstName = 'Joe';
// So does an attempt to add a property
customer.middleInitial = 'P'; // Or remove one
delete customer.lastName;
