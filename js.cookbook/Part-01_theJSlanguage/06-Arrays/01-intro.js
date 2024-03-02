// checking if an object is an array

const object = ['Hulk', 'Thor', 'spiderman'];

if (Array.isArray(object)) {
  // valid array
}

// iterating over the elements in an array

for (const hero of object) {
  console.log(hero);
}

object.forEach(function (hero, index, array) {
  console.log(hero);
});

// arrow function

object.forEach((hero) => console.log(hero));

// methods

// map() => Change every element of an array
// every() => See if all elements meets a specific condition
// some() => See if atleast one elements meet a specific condition
// filter() => Find array elements matching your criteria
// sort() => Re order an element
// reduce() => Use all the values of an array in one calculation

// Check if two arrays are equal

function areArraysEqual(arrayA, arrayB) {
  if (!Array.isArray(arrayA) || !Array.isArray(arrayB)) {
    // These objects are null, undeclared, or non-array objects
    return false;
  } else if (arrayA == arrayB) {
    // Shortcut: they're two references pointing to the same array
    return true;
  } else if (arrayA.length !== arrayB.length) {
    return false;
  } else {
    for (let i = 0; i < arrayA.length; i++) {
      // We require items to have the same content and be the same type,
      // but you could use loosely typed equality depending on your task
      if (arrayA[i] !== arrayB[i]) return false;
    }
    return true;
  }
}

const fruitNamesA = ['apple', 'kumquat', 'grapefruit', 'kiwi'];
const fruitNamesB = ['apple', 'kumquat', 'grapefruit', 'kiwi'];
const fruitNamesC = ['avocado', 'squash', 'red pepper', 'cucumber'];

console.log(areArraysEqual(fruitNamesA, fruitNamesB)); // true
console.log(areArraysEqual(fruitNamesA, fruitNamesC)); // false

console.log(areArraysEqual(fruitNamesA.sort(), fruitNamesB.sort())); // true
