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
