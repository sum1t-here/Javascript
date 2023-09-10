// function declaration

function functionName(parameter1, parameter2) {
  // Function body: code that gets executed when the function is called
  // You can use the parameters within the function body
  return result; // Optional: A value that the function returns (if needed)
}

function add(a, b) {
  return a + b;
}

const sum = add(3, 5); // Call the function and store the result in 'sum'
console.log(sum); // Output: 8

const multiply = function (x, y) {
  return x * y;
};

const product = multiply(4, 6);
console.log(product); // Output: 24

// arrow function

const square = (num) => {
  return num * num;
};

const squaredValue = square(5);
console.log(squaredValue); // Output: 25

// anonymous function => function that doesn't have a name

const greeting = function (name) {
  return `Hello, ${name}!`;
};

console.log(greeting('John')); // Output: Hello, John!

// function with default parameter

function greet(name = 'Guest') {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet('Alice')); // Output: Hello, Alice!

// IIFE

(function () {
  const message = 'Hello from IIFE!';
  console.log(message);
})();
// Output: Hello from IIFE!

(function () {
  // Your code here
})();

// The function is wrapped inside parentheses (). This step is essential to avoid syntax errors due to function expressions not being allowed to start with the function keyword in certain contexts.
// The entire function is enclosed within parentheses () again, which makes it an expression.
// Finally, the trailing parentheses () immediately invoke the function.

const counter = (function () {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
})();

console.log(counter.getCount()); // Output: 0
counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2

// Higher-order functions are functions that can take other functions as arguments or return functions as their results. In JavaScript, functions are first-class citizens, which means they can be treated like any other value, such as strings, numbers, or objects. This enables the concept of higher-order functions, and it is a powerful feature of functional programming in JavaScript

// function as argument

function doOperation(operation, a, b) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function productof(x, y) {
  return x * y;
}

console.log(doOperation(add, 3, 5)); // Output: 8
console.log(doOperation(productof, 3, 5)); // Output: 15

// function as return values

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
console.log(double(5)); // Output: 10

const triple = createMultiplier(3);
console.log(triple(5)); // Output: 15

// Array Higher-Order Functions

const numbers = [1, 2, 3, 4, 5];

// Map: applies a function to each element and returns a new array
const doubledNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Filter: returns a new array with elements that pass a condition
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// Reduce: reduces the array to a single value using an accumulator
const sum1 = numbers.reduce(function (acc, num) {
  return acc + num;
}, 0);
console.log(sum1); // Output: 15

// rest parameter

function sumAll(...numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
