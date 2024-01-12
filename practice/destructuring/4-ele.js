// 04. Access random elements.

// You are building a program that takes an array of numbers as input and you need to extract the first, second, and last elements of the array. You decide to write a function that can accomplish this task using destructuring assignment with an array. The function should take the array as an argument, destructure it into three variables representing the first, second, and last elements, and then return an array with these three values. For example, if the input array is [1, 2, 3, 4, 5], the function should return an array [1, 2, 5].

function extractElements(arr) {
  const [first, second] = arr;
  const [...rest] = arr.reverse();
  return [first, second, rest[0]]; // Return an array with the first, second, and last elements
}

const inputArray = [1, 2, 3, 4, 5];
const resultArray = extractElements(inputArray);

console.log(resultArray); // Output: [1, 2, 5]
