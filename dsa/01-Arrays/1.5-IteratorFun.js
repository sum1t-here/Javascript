// Iterator function

// Non–Array-Generating Iterator Functions

// forEach(): This function takes a function as an argument and applies the called function
// to each element of an array

function square(num) {
  console.log(num, num * num);
}

var nums = [1, 2, 3, 4, 5];
nums.forEach(square);

// 1 1
// 2 4
// 3 9
// 4 16
// 5 25

// every(): applies a Boolean function to an array and returns true
// if the function can return true for every element in the array

function isEven(num) {
  return num % 2 == 0;
}

const nums_ = [2, 4, 6, 8, 9, 10];

if (nums_.every(isEven)) {
  console.log('All numbers are even');
} else {
  console.log('Not all numbers are even');
}

// some(): it will take a Boolean function and return true
// if at least one of the elements in the array meets
// the criterion of the Boolean function

if (nums_.some(isEven)) {
  console.log('Some are even');
}

// reduce() function applies a function to an accumulator and the successive elements
// of an array until the end of the array is reached, yielding a single value

function add() {
  const sum = nums.reduce((a, c) => a + c);
  console.log(sum);
}

const numbers = [1, 2, 3, 4, 5];
add(numbers);

function concat(accumulatedString, item) {
  return accumulatedString + item;
}
var words = ['the ', 'quick ', 'brown ', 'fox '];
var sentence = words.reduce(concat);
console.log(sentence); // displays "the quick brown fox"

var sentence = words.reduceRight(concat);
console.log(sentence); // fox brown quick the

/**
 * Iterator function that returns a new array
 */

// map(): similar to forEach() but returns a new array

function curve(grade) {
  return (grade += 5);
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);

console.log(newgrades);
// [ 82, 70, 86, 97, 88 ]

function first(word) {
  return word[0];
}
var words = ['for', 'your', 'information'];
var acronym = words.map(first);

console.log(acronym.join('-'));
// f-y-i

// filter(): The filter() function works similarly to every(),
//  but instead of returning true if all the elements of an array
// satisfy a Boolean function, the function returns a new array
// consisting of those elements that satisfy the Boolean

function IsEven(num) {
  return num % 2 == 0;
}

function IsOdd(num) {
  return num % 2 != 0;
}

var nums = [];
for (var i = 0; i < 20; ++i) {
  nums[i] = i + 1;
}

const Even = nums.filter(IsEven);
console.log('Even numbers:');
console.log(Even);

// Even numbers:
// [
//    2,  4,  6,  8, 10,
//   12, 14, 16, 18, 20
// ]

const Odd = nums.filter(IsOdd);
console.log('Odd numbers:');
console.log(Odd);

// Odd numbers:
// [
//    1,  3,  5,  7,  9,
//   11, 13, 15, 17, 19
// ]
