// Breaking down an array into variables - Destructuring

const stateValues = [459, 455, 57];
const [Batman, Ironman, BlackPanther] = stateValues;

console.log(Batman); // 459

// rest operator

const health = [33, 44, 5, 6, 6, 767];
const [Spiderman, Thor, Loki, ...others] = health;

console.log(...others); // 6 6 767

// Passing array to a function that excepts a list of values

const numbers = [2, 3, 4, 5, 6, 7];

// this results in NaN
const maximumFall = Math.max(numbers);

// use spread operator
const maximum = Math.max(...numbers);
console.log(maximum); // 7

const maximum2 = Math.max(24, ...numbers, 99);
console.log(maximum2); // 99

// cloning an array

const numbersCopy = [...numbers];
console.log(numbersCopy);
console.log(numbers);
// [ 2, 3, 4, 5, 6, 7 ]
// [ 2, 3, 4, 5, 6, 7 ]

console.log(numbers.slice());
// [ 2, 3, 4, 5, 6, 7 ]

numbersCopy[4] = 8;
console.log(numbers[4]); // 6
console.log(numbersCopy[4]); // 8

// Both approaches shown here create shallow copies. If your array consists of
// primitives (numbers, strings, or Boolean values), the copied array matches
// exactly. But if your array holds objects, these techniques copy the reference,
// not the entire object. As a result, your new array will have references pointing
// to the same objects. Change one of the objects in the copied array, and it also
// affects the original array:

const originalObject = [
  { name: "Pikachu", type: "Electric", attack: "ThunderTail", health: "100" },
  { name: "Bulbasaur", type: "Grass", attack: "Razorblade", health: "99" },
];

const copiedObject = [...originalObject];

copiedObject[0].health = 99;

console.log(originalObject[0].health); // 99

// Create a new array with copied objects
const objectsCopy = originalObject.map((element) => ({ ...element }));

objectsCopy[1].health = 80;
console.log(originalObject[1].health); // 99

// Merging two arrays

const even = [2, 4, 6, 8];
const odd = [1, 3, 5, 7];

// const evenAndOdds = even.concat(odd)

const evenAndOdds = [...even, ...odd];

// copting a portion of the array

const animals = ["Monkey", "Lion", "Tiger", "Cow", "Buffalo", "Deer"];

// from index 3 to 4

const domestic = animals.slice(3, 5);
console.log(domestic);
// [ 'Cow', 'Buffalo' ]
