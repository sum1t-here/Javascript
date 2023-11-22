// Problem 1:

// You want to verify that a variable is defined, is a string, and is not empty before you use it

// solution:

let unknownVariable = 'hello I am reading the js cookbook by O Reilly';

if (typeof unknownVariable === 'string' && unknownVariable.trim().length > 0) {
  console.log('The variable is of type string and it is non-empty ');
} else {
  console.log('Not a string');
}

// what if the var is passed using an unknow object?

const another_unknownVariable = new String('test');

if (
  typeof another_unknownVariable === 'String' ||
  String.prototype.isPrototypeOf(another_unknownVariable)
) {
  console.log('It is a string');
  if (another_unknownVariable.length > 0) {
    console.log('It is a non empty string');
  } else {
    console.log('Empty String');
  }
}

// old fashioned string validation

if (unknownVariable) {
  /* we get here as long as:
        variable has been declared
        variable 'is not null'
        variable is not the empty string ''

        ! note: null values, unefined vslues and empty strings are defined falsy in js
        
    */
  console.log('It is a non-empty string');
}

// This approach will not work with 0, as it will skip the if condition resulting in false to be safr explicitly convert the numeric variable to string variable

// Problem 2:

//  You want to create a string representation of a number

// Solution:

// Approach 1: Adding '' at the end of the number

const some_num = 4;
console.log(typeof some_num); // number

const some_String = some_num + '';
console.log(typeof some_String); // string

// Approach 2: explicit variable conversion using .toString()

const another_num = 0;
const another_str = another_num.toString();
console.log(typeof another_str); // string

//  some utility methods
const someNumber = 1242.0055;

// Ask for exactly 2 decimal points. Numbers will be rounded if necessary.

const fixedString = someNumber.toFixed(2); // fixedString = '1242.01'

// Ask for 5 significant digits. Scientific notation is used if necessary.

const precisionString = someNumber.toPrecision(5); // precisionString = '1242.0'

// Ask for scientific notation with 2 decimal plates.

const scientificString = someNumber.toExponential(2); // scientificString = '1.24e+3'

// Intl.NumberFormat : number to string comparision and include commas, currency symbol and more

// For example, to format a number as a US currency string, you use code like this:
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'INR',
});
const number = 1242.0005;
const moneyString = formatter.format(number);
console.log(moneyString); // moneyString = '₹1,242.00'

const copyrightNotice = 'This page \u00A9 Sheby Powers';
console.log(copyrightNotice); // This page © Sheby Powers

// inserting emojis

const hamburgerStory = 'I like hamburgers' + String.fromCodePoint(0x1f354);
console.log(hamburgerStory); // I like hamburgers🍔

const hamburger = '🍔';
const hamburgerLength = hamburger.length;
console.log(hamburgerLength); // 2

// Even though the hamburger string is just one character, to your code the length appears to be 2 because the hamburger emoji takes twice as many bytes in memory. This is an unpleasant leaky abstraction and a limitation of JavaScript’s support for Unicode.
