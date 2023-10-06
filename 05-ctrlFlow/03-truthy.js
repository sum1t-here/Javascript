const userEmail = 'Sumit@ai';

if (userEmail) {
  console.log('Got user email');
} else {
  console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", {}, (), function(){}

// if (userEmail.length === 0) {
//   console.log('Array is Empty');
// }

const emptyObj = {};
// Object.keys(emptyObj) -> creates an array of keys
if (Object.keys(emptyObj).length === 0) {
  console.log('Object is Empty');
}

// Nullish Coalescing operator (??): null undefined
let val1;
val1 = 5 ?? 10;

let val2;
// val2 = null ?? 10; // null

val2 = undefined ?? 10; // 10

console.log(val1); // 5
console.log(val2); // null

let val = null ?? 10 ?? 20;
console.log(val); // 10

// Terniary operator

// condition ? a : b
const iceTeaPrice = 100;

iceTeaPrice <= 80
  ? console.log('less than 80')
  : console.log('greater than 80');

// greater than 80
