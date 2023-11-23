// -------------------
// Creation of Array
// -------------------

// creating array variables using []
var numbers = [];
console.log(numbers.length); // 0

var numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5

// using array constructor
var alpha = new Array('a', 'b', 'c', 'd', 'e');
console.log(alpha.length); // 5

// single numeric value in constructor specifies the length of the array
var alpha = new Array(10);
console.log(alpha.length); // 10

var objects = [1, true, null, 'JohnDoe'];

// verify an object is an array

var number = 3;

var array = [1, 2, 3, 4, 5];

console.log(Array.isArray(number)); // false
console.log(Array.isArray(array)); // true
