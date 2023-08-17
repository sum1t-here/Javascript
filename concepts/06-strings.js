let a = 'Hello world';
console.log(a); // output: Hello world
console.log(a.length); // output: 11

console.log(a[0]); // output: H

// template literals

let boy1 = 'Pramod';
let boy2 = 'Nikhil';

let sentence = `${boy2} is a friend of ${boy1}`;

// We can insert variable directly in template literal. This is known as string interpolation

// String properties and methods

let b = 'Hello';
let c = 'World';
let d = 'Hello World   ';

console.log(b.length); // 5
console.log(b.toUpperCase()); // HELLO
console.log(b.toLowerCase()); // hello
console.log(b.slice(2, 4)); // ll
console.log(b.slice(2)); // llo
console.log(b.replace('Hello', 'World')); // World
console.log(b.concat(c)); // HelloWorld
console.log(d.trim());

// Problem

// You want to verify that a variable is defined, is a string, and is not empty before you use it.

// Solution:

// If you want to make sure that your variable is a string (not just a variable that can be converted to a string), you use this test:

let myString = 'Hello, world!';
let emptyString = '';
let nonString = 123;

if (typeof myString === 'string') {
  console.log(' string ');
} else {
  console.log(' not a string ');
} // string

if (typeof emptyString === 'string') {
  console.log(' string ');
} else {
  console.log(' not a string ');
} // string

if (typeof nonString === 'string') {
  console.log(' string ');
} else {
  console.log(' not a string ');
} //  not a string

// If you want to check that you have a nonempty string (not the zero-length string ''), you can tighten your verification like this:
if (typeof myString === 'string' && myString.length > 0) {
  console.log('non empty string');
} else {
  console.log(' empty string');
} // empty string

if (typeof emptyString === 'string' && emptyString.length > 0) {
  console.log('non empty string');
} else {
  console.log(' empty string');
} // empty string

// if (typeof nonString === 'string' && nonString.length > 0) {
//   console.log('non empty string');
// } else {
//   console.log(' empty string');
// }

let str1 = 'hello';

let str2 = 'world';

console.log(str1 + str2); // helloworld

console.log('1' + 2); // 12
console.log(1 + '2'); // 12
console.log('1' + 2 + 2); // 122
console.log(1 + 2 + '2'); // 32

console.log(+true); // 1 (to be incremented but not possible so its type is converted)
// console.log(true+); error

let counter = 100;
console.log(counter++); // 100 log then increment to 101
console.log(++counter); // 102 incremented and then log
