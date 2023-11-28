/**
 * -------------------------------------------------
 *  Performing a Case-Insensitive String Comparison
 * -------------------------------------------------
 */

// Problem: You want to see if two strings match, while treating uppercase and lowercase letters as the same.

// Solution :

const a = 'hello';
const b = 'Hello';

if (a.toLowerCase() === b.toLowerCase()) {
  console.log('Both strings are same');
}

// This approach is fairly reliable, but it can suffer from edge cases with different languages, accents, and special characters.

// An alternate, bulletproof approach is to use the String.localeCompare() method with sensitivity set to accent, as shown here:

if (a.localeCompare(b, undefined, { sensitivity: 'accent' }) === 0) {
  console.log('Both the strings are same');
}

// Discussion:

// localeCompare():

// when both the the string matches it return 0
// else it returns a +ve or a -ve integer indicating whether the compared string falls before or after the referenced string in the sort order.

// second parameter:

// The second parameter of localeCompare() holds a string that specifies the locale.
// If you pass undefined, then localeCompare() uses the locale of the current computer, which is almost always what you want.

// To perform a case-insensitive comparison, you need to set the sensitivity property.
// There are two values that can work.
// If you set sensitivity to accent, characters that have different accents (like a and á) are treated as unequal.
// But if you set sensitivity to base, you’ll get a more permissive case-insensitive comparison that treats all accented letters as matches.

/**
 * ---------------------------------------------------
 * Checking If a String Contains a Specific Substring
 * ---------------------------------------------------
 */

// Problem: You want to check if one string contains another substring.

// solution:

const searchString = 'infinitely';
const fullText =
  'I know not where I was born, save that the castle was' +
  ' infinitely old and infinitely horrible.';
if (fullText.includes(searchString)) {
  console.log(`${searchString} was found`);
}

// we can also tell includes(), where to begin it search, in the code below it skips the 70 characters
// then searches for searchString

if (fullText.includes(searchString, 70)) {
  // Still true, because the search skips the first 'infinitely' and
  // hits the second one.
}

const searchString_ = 'INFINITELY';

if (fullText.toLowerCase().includes(searchString_.toLowerCase())) {
  console.log('Found');
}

/**
 * --------------------------------------
 * Replacing All Occurrences of a String
 * --------------------------------------
 */
// Problem : You want to find all occurrences of a specific substring in a string, and replace them with something else.

// Solution:

const storyText =
  'I know not where I was born, save that the castle was' +
  ' infinitely old and infinitely horrible.';
const changedStory = storyText.replaceAll('infinitely', 'somewhat');
console.log(changedStory);

/**
 * -----------------------------------------------------------
 * Using a Regular Expression to Replace Patterns in a String
 * -----------------------------------------------------------
 */

// Problem: You want to search a string for a pattern,
// rather than an exact sequence of characters.
// You then want to create a new string, with the pattern replaced.

// solution:

const originalString = 'Now is the time, this is the tame';
const regex = /t\w{2}e/g;
const newString = originalString.replaceAll(regex, 'place');
console.log(newString); // Now is the place, this is the place

// t\w{2}e : This translates into look for any sequence of characters beginning with t,
//  ending with e, and containing two other alphanumeric characters

// The g at the end of the regular expression is an additional detail called the global flag.
// It indicates that you are searching the whole string for matches.
// If you don’t include the g flag, you’ll receive an error when you call replaceAll()

// Also this could be used

// const regex = new RegExp('t\\w{2}e', 'g');
// const newString = originalString.replaceAll(regex, 'place');

// You might find that escaping backslashes is awkward or confusing in long,
// complicated regular expressions. If so, you can get around the escaping
// requirement with a template literal

// Although String.raw is a method, it has no parentheses after it,
// and it uses the specialized backtick syntax shown here.

// const regex = new RegExp(String.raw`t\w{2}e`, 'g');
