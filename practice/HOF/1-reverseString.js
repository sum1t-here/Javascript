// Reverse String.

// The problem is to create a program that uses the setTimeout() function to reverse a given string after a delay
// of 2 seconds. The program should use a variable “input” storing a string as input and then implement a delay of
// 2 seconds before reversing the string. The reversed string should then be printed as output.

const reverseStr = (str, cb) => {
  setTimeout(() => {
    const reversedString = str.split('').reverse().join('');
    cb(reversedString);
  }, 2000);
};

const inpStr = 'Hello';

reverseStr(inpStr, (result) => {
  console.log('Original Str: ', inpStr);
  console.log('Reversed Str: ', result);
});

// output:

// Original Str:  Hello
// Reversed Str:  olleH
