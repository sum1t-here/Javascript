// for of

// ["", "", ""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const greetings = 'Hello world';

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
}

//  maps -> key, value pair

const map = new Map();
map.set('IN', 'India');
map.set('UK', 'United Kingdom');
map.set('FR', 'France');
map.set('IN', 'India');

console.log(map);
// Map(3) { 'IN' => 'India', 'UK' => 'United Kingdom', 'FR' => 'France' }
//  No duplicate values

// Expected to get only keys:
for (const key of map) {
  console.log(key);
}
// [ 'IN', 'India' ]
// [ 'UK', 'United Kingdom' ]
// [ 'FR', 'France' ]

// Destructuring of array using []
for (const [key, value] of map) {
  console.log(key, ' : ', value);
}

// IN  :  India
// UK  :  United Kingdom
// FR  :  France

// for (const key in map) {
//   console.log(key);
// }

// map is not iterable

const myObj = {
  game1: 'NFS',
  game2: 'IGI',
};

// for (const [key, value] of myObj) {
//   console.log(key, ' : ', value);
// }

// myObj is not iterable

for (const key in myObj) {
  console.log(`${key} shortcut is for ${myObj[key]}`);
}

// game1 shortcut is for NFS
// game2 shortcut is for IGI

const programming = ['js', 'rb', 'py', 'java'];
for (const key in programming) {
  console.log(programming[key]);
}

// keys for the array
// 0
// 1
// 2
// 3

// js
// rb
// py
// java

const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

// coding.forEach(function (item) {
//   console.log(item);
// });

// js
// ruby
// java
// python
// cpp

coding.forEach((val) => {
  console.log(val);
});
// js
// ruby
// java
// python
// cpp

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe)

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

const myCoding = [
  {
    languageName: 'JavaScript',
    languageFileName: 'js',
  },
  {
    languageName: 'C++',
    languageFileName: 'cpp',
  },
  {
    languageName: 'Java',
    languageFileName: 'java',
  },
  {
    languageName: 'Python',
    languageFileName: 'py',
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

// JavaScript
// C++
// Java
// Python
