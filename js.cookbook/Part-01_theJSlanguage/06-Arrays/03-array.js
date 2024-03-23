/**
 * Removing duplicates from an array
 */

const numberWithDuplicates = [2, 3, 4, 5, 6, 6, 6, 7, 7, 78, 8, 89, 9, 99, 12];

// create a Set with unique values
const uniqueNumberSet = new Set(numberWithDuplicates);
console.log(uniqueNumberSet);
// Set(12) { 2, 3, 4, 5, 6, 7, 78, 8, 89, 9, 99, 12 }

// turn the set back into an array
const uniqueArray = Array.from(uniqueNumberSet);
console.log(uniqueArray);
// [2, 3, 4, 5, 6, 7, 78, 8, 89, 9, 99, 12];

// into a single statement
const uniqueNumbers = [...new Set(numberWithDuplicates)];

/**
 *  Searching Through an Array for Exact Matches
 */

const animals = ['dog', 'cat', 'seal', 'elephant', 'walrus', 'lion'];
console.log(animals.indexOf('elephant')); // 3
console.log(animals.lastIndexOf('walrus')); // 4
console.log(animals.includes('dog')); // true

/**
 * Searching Through an Array for Items That Meet Specific Criteria
 */

const nums = [2, 4, 19, 15, 183, 6, 7, 1, 1];
// Find the first value over 10.
const bigNum = nums.find((element) => element > 10);
console.log(bigNum); // 19 (the first match)

const bigNumIndex = nums.findIndex((element) => element > 100);
console.log(bigNumIndex); // 4 (the index of the first match)

/**
 * Removing or Replacing Array Elements
 */

const animal = ['dog', 'cat', 'seal', 'walrus', 'lion', 'cat'];

// Find where the 'walrus' item is
const walrusIndex = animal.indexOf('walrus');
// Join the portion before 'walrus' to the portion after 'walrus'
const animalsSliced = [
  ...animal.slice(0, walrusIndex),
  ...animal.slice(walrusIndex + 1),
];
// now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']

// Alternate approach

// Starting at walrusIndex, remove 1 element
animal.splice(walrusIndex, 1);

// now animal = ['dog', 'cat', 'seal', 'lion', 'cat']

// splice method

// Start at 'lion', and remove the rest of the elements
animals.splice(2);

// const animals = ['cat', 'walrus', 'lion', 'cat'];
// Remove one element and add two new elements
animals.splice(2, 1, 'zebra', 'elephant');
// now animals = ['cat', 'walrus', 'zebra', 'elephant', 'cat']

/**
 * Transforming every element of an array
 */

const decArray = [23, 255, 122, 5, 16];
// Use the toString() method to conver to base-16 values
const hexArray = decArray.map((element) => element.toString(16));
console.log(hexArray);
// [ '17', 'ff', '7a', '5', '10' ]

/**
 * Combining an Array’s Values in a Single Calculation
 */

const numbers = [23, 255, 122, 5, 16, 99];
// The reducer function adds to the accumulator
const totalSquares = numbers.reduce((acc, val) => acc + val ** 2, 0);
// totalSquares = 90520

// The reducer function adds to the accumulator
const average = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
// average = 86.66...

// The reducer function returns the higher value (accumulator or current value)
const max = numbers.reduce((acc, val) => (acc > val ? acc : val));
// max = 255

/**
 * Creating a Key-Indexed Collection of Items
 */

// When adding items to a Map object, you must always use the set() method. Don’t fall into this trap:

const products = new Map();
// Add three items
products.set('RU007', { name: 'Rain Racer 2000', price: 1499.99 });
products.set('STKY1', { name: 'Edible Tape', price: 3.99 });
products.set('P38', { name: 'Escape Vehicle (Air)', price: 2999.0 });
// Check for two items using the item code
console.log(products.has('RU007')); // true
console.log(products.has('RU494')); // false
// Retrieve an item
const product = products.get('P38');
if (typeof product !== 'undefined') {
  console.log(product.price); // 2999
}
// Remove the Edible Tape item
products.delete('STKY1');
console.log(products.size); // 2

// The Map object has a small set of methods for managing its contents: set(), get(), has(), and delete()

const productArray = Array.from(products);
console.log(productArray[0]);
// [ 'RU007', { name: 'Rain Racer 2000', price: 1499.99 } ]

// In some situations, you might not need to keep the key name when you convert a Map to an array.
// Maybe the key isn’t important, or it’s duplicated by a property of your elements. In this case,
//  you can choose to transform your collection, throwing away the key values as you copy your data
//  out of the Map

// const productArray = Array.from(products, ([name, value]) => value);
// console.log(productArray[0]);
// // {name: 'Rain Racer 2000', price: 1499.99}
