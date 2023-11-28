/**
 * Extracting a List from a String
 */

// Problem: You have a string with several sentences, one of which includes a list of items.
// The list begins with a colon (:), ends with a period (.), and separates each item with a comma (,).
// You want to extract just the list.

// Before:
// This is a list of items: cherries, limes, oranges, apples.
// After:
// ['cherries','limes','oranges','apples']

// Solution:

const sentence =
  'This is one sentence. This is a sentence with a list of items:' +
  'cherries, oranges, apples, bananas. That was the list of items.';
const start = sentence.indexOf(':');
const end = sentence.indexOf('.', start + 1);

const list = sentence.slice(start + 1, end);
console.log(list);
// cherries, oranges, apples, bananas

let fruits = list.split(',');
console.log(fruits);
// [ 'cherries', ' oranges', ' apples', ' bananas' ]

// When you call split(), you must choose a delimiter.
// It could be a space, a comma, a series of dashes, or something else.
// The delimiter is used to carve up the string into smaller pieces,
// and it won’t appear in the results.

const fruits_ = fruits.map((s) => s.trim());
console.log(fruits_);
// [ 'cherries', 'oranges', 'apples', 'bananas' ]

/**
 * Converting the First Letter of a String to Uppercase
 */

const original = 'if you cut an orange, there is a risk it will orbisculate.';
const fixed = original[0].toUpperCase() + original.slice(1);
// fixed = 'If you cut an orange, there is a risk it will orbisculate.';
