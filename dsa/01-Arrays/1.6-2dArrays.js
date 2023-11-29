var twod = [];
var rows = 5;
for (var i = 0; i < rows; ++i) {
  twod[i] = [];
}

console.log(twod);
// [[], [], [], [], []];

// A better way of creating 2d array is

Array.matrix = function (numrows, numcols, initals) {
  const arr = [];
  for (let i = 0; i < numrows; i++) {
    const column = [];
    for (let j = 0; j < numcols; j++) {
      column[j] = initals;
    }
    arr[i] = column;
  }
  return arr;
};

const nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]); // 0
console.log(nums[1][2]); // 0
console.log(nums);

// [
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ],
//     [ 0, 0, 0, 0, 0 ]
//   ]

// creation of 2d arrays in one line

const grades = [
  [89, 77, 78],
  [76, 82, 81],
  [91, 94, 89],
];

let total = 0;
let average = 0;

for (let row = 0; row < grades.length; ++row) {
  for (let col = 0; col < grades[row].length; ++col) {
    total += grades[row][col];
  }
  average = total / grades[row].length;
  console.log(
    'Student ' + parseInt(row + 1) + ' average: ' + average.toFixed(2)
  );
  total = 0;
  average = 0;
}

// Student 1 average: 81.33
// Student 2 average: 79.67
// Student 3 average: 91.33

// to perform row wise we have to simply flip the for loop for row and column

// var grades = [
//   [89, 77, 78],
//   [76, 82, 81],
//   [91, 94, 89],
// ];
// var total = 0;
// var average = 0.0;
// for (var col = 0; col < grades.length; ++col) {
//   for (var row = 0; row < grades[col].length; ++row) {
//     total += grades[row][col];
//   }
//   average = total / grades[col].length;
//   print('Test ' + parseInt(col + 1) + ' average: ' + average.toFixed(2));
//   total = 0;
//   average = 0.0;
// }

/**
 * Jagged Arrays
 */

// var grades = [
//   [89, 77],
//   [76, 82, 81],
//   [91, 94, 89, 99],
// ];
// var total = 0;
// var average = 0.0;
// for (var row = 0; row < grades.length; ++row) {
//   for (var col = 0; col < grades[row].length; ++col) {
//     total += grades[row][col];
//   }
//   average = total / grades[row].length;
//   print('Student ' + parseInt(row + 1) + ' average: ' + average.toFixed(2));
//   total = 0;
//   average = 0.0;
// }
