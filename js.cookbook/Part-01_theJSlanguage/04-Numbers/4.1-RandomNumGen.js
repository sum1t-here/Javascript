/**
 * Generating random numbers
 */

// Problem:

// You want to generate a random whole number that falls in a set range (for example, from 1 to 6).

// solution:

// randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const randomNumber = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber);

/**
 * Generating Cryptographically Secure Random Numbers
 */

// Problem:

// You want to create a random number that can’t be easily reverse engineered (guessed).

// Solution:

// Use the window.crypto property to get an instance of the Crypto object.
// Use the Crypto.getRandomValues() method to generate random values
// that have more entropy than those produced by Math.random().

// The Crypto.getRandomValues() method works differently from Math.random().
// Rather than giving you a floating-point number between 0 and
//1, getRandomValues() fills an array with random integers.
//You can choose whether these integers are 8-bit, 16-bit, or
//32-bit, and whether they are signed or unsigned

// web

// const randomBuffer = new Uint32Array(1); window.crypto.getRandomValues(randomBuffer);
// const randomFraction = randomBuffer[0] / (0xffffffff + 1);

// node js
import { webcrypto as crypto } from 'crypto';

const randomBuffer = new Uint32Array(1);
crypto.getRandomValues(randomBuffer);
const randomFraction = randomBuffer[0] / (0xffffffff + 1);
// Use the random fraction to make a random integer from 1-6
const randomCryptoNumber = Math.floor(randomFraction * 6) + 1;
console.log(randomCryptoNumber);

// Technically, Crypto creates pseudorandom numbers that are generated by a mathematical formula,
// like those provided by Math.random(). The difference is that these numbers are considered
// cryptographically strong, because the random number generator is seeded with a truly random value.
// The benefit of this trade-off is that getRandomValues() has similar performance to Math.random(). (It’s fast.)

// There’s no way to know how the Crypto object is seeded, because that’s up to the implementation
// (for web page code, that means the browser manufacturer), which in turn relies on functionality
// in the operating system. Usually, the seed is created using a combination of recently recorded
// details about keyboard timings, mouse movements, and hardware readings.

// No matter how good your random numbers are, if your JavaScript code is running in a browser,
// it’s exposed to a great number of attacks. After all, there’s nothing to stop a malicious party from seeing your code and
// creating an altered copy that bypasses all random number generation. If your code is running on a server, the situation is different.

// Before you call getRandomValues(), you must create a typed array, which is an array-like object that can only
// hold values of a specific data type. (We say array-like because it behaves like an array, but it isn’t an
// instance of the official Array type.) JavaScript provides several strongly typed array objects you can use:
// like Uint32Array (for an array of unsigned 32-bit integers), Uint16Array, Uint8Array, and the
// signed counterparts Int32Array, Int16Array, and Int8Array. You create this array to be as big as you want,
// and getRandomValues() will fill the whole buffer.

// const randomBuffer = new Uint32Array(1);
// window.crypto.getRandomValues(randomBuffer);

// The final step is to divide this random value by the maximum possible unsigned 32-bit integer,
// which is 4,294,967,295. This number is cleaner in its hexadecimal representation, 0xffffffff:

// const randomFraction = randomBuffer[0] / (0xffffffff + 1);

// you also need to add 1 to the maximum value. That’s because the random value could
// theoretically land exactly on the maximum integer value. If it did, the randomFraction would become 1,
// which differs from Math.random() and most other random number generators.
// (And a tiny unexpected variation from the norm is something that can lead to a incorrect assumption,
// and then a bug further down the road.)

/**
 * Rounding to a Specific Decimal Place
 */

// Problem
// You want to round a number to a certain precision (for example, 124.793 to 124.80 or 120).

// Solution:

// const fractionalNumber = 19.48938;
// const roundedNumber = Math.round(fractionalNumber);

// the round() method doesn’t take an argument that lets you specify a number of
// decimal places to keep. If you want a different degree of precision,
// it’s up to you to multiply your number by the appropriate power of 10,
// round it, and then divide it by the same power of 10 after rounding

// const numberToRound = fractionalNumber * 10 ** numberOfDecimalPlaces;
// let roundedNumber = Math.round(numberToRound);
// roundedNumber = roundedNumber / 10 ** numberOfDecimalPlaces;

const fractionalNumber = 19.48938;
const numberToRound = fractionalNumber * 10 ** 2;
let roundedNumber = Math.round(numberToRound);
roundedNumber = roundedNumber / 10 ** 2; // 19.49