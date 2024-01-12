// 02. Only unique items are allowed.

// You are building a program that takes an array of numbers as input and you need to remove all the duplicates from the array. You want to write a function that can accomplish this task efficiently and returns a new set that contains only the unique elements.

function uniqueEle(arr) {
  return new Set(arr);
}

const num = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 56, 6, 76, 7];

console.log(uniqueEle(num));

// Set(9) { 1, 2, 3, 4, 5, 56, 6, 76, 7 }
