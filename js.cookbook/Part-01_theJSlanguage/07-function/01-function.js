// Arrow function

// 1. Put the list of parameters first, followed the => symbol. If there are no parameters, use an empty set of parentheses before the => symbol.
// (number) =>
// 2. If there is exactly one parameter (as in this example), you can remove the parentheses around the parameter list.
// number =>
// 3. Put the braces and body of the function on the other side of the arrow.
//    number => {
//      return number**2;
// }
// 4. If there is just one statement, you can remove the braces and the return keyword. But if you have more than one statement, you must keep both the braces and the return keyword.
//    number => number**2;

/**
 * Providing a default parameter value
 */

function add(num1, num2, num3 = 0) {
  return num1 + num2 + num3;
}

let a = 1;
let b = 2;
let c = 3;

console.log(add(a, b)); // 3
console.log(add(a, b, c)); // 6

/**
 * Functions that accept unlimited argument
 */

function sumRounds(...num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Math.round(num[i]);
  }
  return sum;
}

console.log(sumRounds(2.3, 4, 5, 16, 18.1)); // 45

/**
 * Using Named Function Parameters
 */

function dateDifferenceInSeconds(
  newDate,
  oldDate,
  { discardTime, discardYear, precision } = {}
) {
  if (discardTime) {
    newDate = newDate.setHours(0, 0, 0, 0);
    oldDate = newDate.setHours(0, 0, 0, 0);
  }
  if (discardYear) {
    newDate.setYear(0);
    oldDate.setYear(0);
  }
  const differenceInSeconds = (newDate.getTime() - oldDate.getTime()) / 1000;
  return differenceInSeconds.toFixed(precision);
}

const date = new Date();
const oldDate = new Date(2010, 1, 10);

// Call the function without an object literal
let difference = dateDifferenceInSeconds(date, oldDate);
console.log(difference); // 445737304

// Call the function with an object literal, and specify two properties
difference = dateDifferenceInSeconds(date, oldDate, {
  discardYears: true,
  precision: 2,
});
console.log(difference);
// 445737353.

/**
 * Creating a Function That Stores its State with a Closure
 */

function greetingMaker(greeting) {
  function addName(name) {
    return `${greeting} ${name}`;
  }
  return addName;
}

const daytimeGreeting = greetingMaker('Good Day to you');
const nightGreeting = greetingMaker('Good Evening');

console.log(daytimeGreeting('Peter')); // Good Day to you Peter
console.log(nightGreeting('Sally')); // Good Evening Sally

function createCounter() {
  let count = 0;
  function counter() {
    count += 1;
    console.log(count);
  }
  return counter;
}

const counterFunction = createCounter();
counterFunction(); // 1
counterFunction(); // 2
counterFunction(); // 3
