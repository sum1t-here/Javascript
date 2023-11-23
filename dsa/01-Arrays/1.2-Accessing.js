// -------------------------------
// Assigning elements in an array
// -------------------------------

var nums = [];
for (var i = 0; i < 100; i++) {
  nums[i] = i + 1;
}

// -------------------------------
// Accessing elements in an array
// -------------------------------

var numbers = [1, 2, 3, 4, 5];
var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3];

// or

var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum); // 15

// -------------------------------
// Creating arrays from strings
// -------------------------------

var sentence = 'the quick brown fox jump over the lazy dog';
var words = sentence.split(' ');
for (var i = 0; i < words.length; ++i) {
  console.log(' word ' + i + ': ' + words[i]);
}

var nums_ = [];
for (var i = 0; i < 10; i++) {
  nums_[i] = i + 1;
}
var samenums = nums_;
nums_[0] = 400;
console.log(samenums[0]); // 400
console.log(nums_);

// [
//     400, 2, 3, 4,  5,
//       6, 7, 8, 9, 10
//   ]

// This is called shallow copy, the new array simply points to the orginal array's element

// better approach is to make a deep copy, so that each of the original array's element is actually copied to the new array's element

var samenums_ = [];

function copy(arr1, arr2) {
  for (var i = 0; i < words.length; ++i) {
    arr2[i] = arr1[i];
  }
}

copy(nums_, samenums_);
nums_[0] = 200;
console.log(samenums_[0]); // 400
