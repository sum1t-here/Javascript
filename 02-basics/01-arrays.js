// arrays

// declaring arrays
const myArr = [0, 1, 2, 3, 4, 5]; // arrays are resizeable
const myHeroes = ['Shaktiman', 'nagraj'];
const myArr2 = new Array(1, 2, 3, 4);

// accesing element from an Array
console.log(myArr[0]); // 0

// Array methods
myArr.push(6);
myArr.push(7);

console.log(myArr);
// [
//  0, 1, 2, 3,
//  4, 5, 6, 7
// ]

myArr.pop();
console.log(myArr);
// [0, 1, 2, 3, 4, 5, 6];

myArr.unshift(9);
console.log(myArr);
// [9, 0, 1, 2, 3, 4, 5, 6];

myArr.shift();
console.log(myArr);
// [0, 1, 2, 3, 4, 5, 6];

console.log(myArr.includes(9)); // false

console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join('_');

console.log(myArr);
// [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]
console.log(newArr); // 0_1_2_3_4_5_6 (returns as a string)

// slice, splice

console.log('A ', myArr);
// A  [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]

const myn1 = myArr.slice(1, 3);
console.log(myn1); // [ 1, 2 ]

console.log('B ', myArr);
// B  [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]

const myn2 = myArr.splice(1, 3);
console.log('C ', myArr); // C  [ 0, 4, 5, 6 ]
console.log(myn2); // [ 1, 2, 3 ]
