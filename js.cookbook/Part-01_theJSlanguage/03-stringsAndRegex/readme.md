## All String methods in js

### Section 1. Searching

- search() – locate a substring in a string using a regular expression.
- indexOf() – get the index of the first occurrence of a substring in a string.
- lastIndexOf() – find the index of the last occurrence of a substring in a string.
- includes() – check if a string contains a substring.
- startsWith() – check if a string starts with another string.
- endsWith() – determine if a string ends with another string.

```javascript
// search() – locate a substring in a string using a regular expression.
const searchUseCase = () => {
  const str = 'Hello World';
  const regex = /World/;
  const result = str.search(regex);
  console.log(result); // Output: 6
};

// indexOf() – get the index of the first occurrence of a substring in a string.
const indexOfUseCase = () => {
  const str = 'Hello World';
  const index = str.indexOf('World');
  console.log(index); // Output: 6
};

// lastIndexOf() – find the index of the last occurrence of a substring in a string.
const lastIndexOfUseCase = () => {
  const str = 'Hello World Hello';
  const index = str.lastIndexOf('Hello');
  console.log(index); // Output: 12
};

// includes() – check if a string contains a substring.
const includesUseCase = () => {
  const str = 'Hello World';
  const result = str.includes('World');
  console.log(result); // Output: true
};

// startsWith() – check if a string starts with another string.
const startsWithUseCase = () => {
  const str = 'Hello World';
  const result = str.startsWith('Hello');
  console.log(result); // Output: true
};

// endsWith() – determine if a string ends with another string.
const endsWithUseCase = () => {
  const str = 'Hello World';
  const result = str.endsWith('World');
  console.log(result); // Output: true
};
```

### Section 2. Trimming

- trim() – remove whitespace characters from a string.
- trimStart() – remove the leading whitespace characters of a string.
- trimEnd() – remove the ending whitespace characters of a string.

```javascript
// trim() – remove whitespace characters from a string.
const trimUseCase = () => {
  const str = '   Hello World   ';
  const trimmed = str.trim();
  console.log(trimmed); // Output: 'Hello World'
};

// trimStart() – remove the leading whitespace characters of a string.
const trimStartUseCase = () => {
  const str = '   Hello World   ';
  const trimmed = str.trimStart();
  console.log(trimmed); // Output: 'Hello World   '
};

// trimEnd() – remove the ending whitespace characters of a string.
const trimEndUseCase = () => {
  const str = '   Hello World   ';
  const trimmed = str.trimEnd();
  console.log(trimmed); // Output: '   Hello World'
};
```

### Section 3. Extracting

- split() – split a string into an array of substrings.
- substring() – extract a substring from a string.
- slice() – extract a part of a string.

```javascript
// split() - splits a string into an array of substrings based on a specified separator
const splitExample = () => {
  const str = 'apple,banana,orange';
  const arr = str.split(',');
  console.log(arr); // Output: ["apple", "banana", "orange"]
};

// substring() - returns a substring from a string, between two specified indices
const substringExample = () => {
  const str = 'Hello, World!';
  const substring = str.substring(7, 12);
  console.log(substring); // Output: "World"
};

// slice() - extracts a section of a string and returns it as a new string, without modifying the original string
const sliceExample = () => {
  const str = 'Hello, World!';
  const sliced = str.slice(7, 12);
  console.log(sliced); // Output: "World"
};
```

### Section 4. Concating and replacing

```javascript
// Concatenation using the + operator
const concatenationExample = () => {
  const str1 = 'Hello';
  const str2 = 'World';
  const concatenatedString = str1 + ' ' + str2;
  console.log(concatenatedString); // Output: "Hello World"
};

// Concatenation using the concat() method
const concatMethodExample = () => {
  const str1 = 'Hello';
  const str2 = 'World';
  const concatenatedString = str1.concat(' ', str2);
  console.log(concatenatedString); // Output: "Hello World"
};

// Replacing a substring using replace() method
const replaceExample = () => {
  const str = 'Hello, World!';
  const replacedString = str.replace('World', 'Universe');
  console.log(replacedString); // Output: "Hello, Universe!"
};

// Example of using replaceAll() to replace all occurrences of a substring in a string

const originalString = 'Hello World! Hello Universe! Hello Earth!';
const replacedString = originalString.replaceAll('Hello', 'Hi');

console.log(replacedString);
// Output: "Hi World! Hi Universe! Hi Earth!"
```

### Section 5. Changing cases

- toUpperCase()
- toLowerCase()
