// --------------------------------
// Adding Elements from an Array
// --------------------------------

// There are two mutator function to add array:

// push()

const num = [1, 2, 3, 4, 5]; // at the end of an array
console.log(num); // [ 1, 2, 3, 4, 5 ]
num.push(6);
console.log(num); // [ 1, 2, 3, 4, 5, 6 ]

// unshift() : at the beginning of an array

const nums = [2, 3, 4, 5];
console.log(nums); // [ 2, 3, 4, 5 ]
nums.unshift(1);
console.log(nums); // [ 1, 2, 3, 4, 5 ]

// adding an array at the beginning without unshift() function

const nums_ = [2, 3, 4, 5];
const new_num = 1;

const n = nums_.length;
console.log(n); // 4

for (var i = n; i >= 0; --i) {
  nums_[i] = nums_[i - 1];
}

nums_[0] = new_num;

console.log(nums_); // [ 1, 2, 3, 4, 5 ]

// --------------------------------
// Removing Elements from an Array
// --------------------------------

// pop(): removes an element from the end of the array

const number = [1, 2, 3, 4, 5, 9];
number.pop();
console.log(number); // [ 1, 2, 3, 4, 5 ]

// shift(): removes an element from the beginning of the array

number.shift();
console.log(number); // [ 2, 3, 4, 5 ]

// ---------------------------------------------------------
// Adding and Removing Elements from the middle of an Array
// ---------------------------------------------------------

/**
 * using splice():
 *
 * To add elements to an array using splice(), you have to provide the following arguments:
 *
 * The starting index (where you want to begin adding elements)
 * The number of elements to remove (0 when you are adding elements)
 * The elements you want to add to the array
 */

const elements = [1, 2, 3, 7];
const new_elements = [4, 5, 6];
const new_element = 5;

elements.splice(3, 0, new_elements);
console.log(elements); // [ 1, 2, 3, [ 4, 5, 6 ], 7 ]

const numbers_ = [1, 2, 3, 4, 100, 200, 300, 400, 4, 5];
numbers_.splice(3, 5);

console.log(numbers_); // [ 1, 2, 3, 4, 5 ]

/**
 * ---------------------------------
 * Putting Array Elements in Order
 * ---------------------------------
 */

// reverse()

const Elements = [1, 2, 3, 4, 5];
Elements.reverse();
console.log(Elements); // [ 5, 4, 3, 2, 1 ]

// sort()

const names = ['David', 'Mike', 'Cynthia', 'Clayton', 'Bryan', 'Raymond'];
names.sort();

console.log(names); // [ 'Bryan', 'Clayton', 'Cynthia', 'David', 'Mike', 'Raymond' ]

// sort() doesnot work with numbers well

const Elements_ = [1, 23, 400, 40, 200, 100];
Elements_.sort();
console.log(Elements_); // [ 1, 100, 200, 23, 40, 400 ]

// The sort() function sorts data lexicographically, assuming the data elements are strings,
// even though in the preceding example, the elements are numbers.
// We can make the sort() function work correctly for numbers by passing in an ordering function as the first argument to the function,
// which sort() will then use to sort the array elements.
// This is the function that sort() will use when comparing pairs of array elements to determine their correct order.

function compare(num1, num2) {
  return num1 - num2;
}
Elements_.sort(compare);
console.log(Elements_); // [ 1, 23, 40, 100, 200, 400 ]

// The sort() function uses the compare() function to sort the array elements numerically rather than lexicographically.

// All the function used above are called mutator function
