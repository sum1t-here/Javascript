// for

for (let i = 0; i < 10; i++) {
  const element = i;
  //   if (element == 5) {
  //     console.log('5 is best');
  //   }
  console.log(element);
}

for (let j = 0; j <= 10; j++) {
  console.log(`Outer loop value is ${j}`);
  for (let k = 0; k <= 10; k++) {
    // console.log(`inner loop value is ${k} and innerlopp ${j}`);
    console.log(j + ' * ' + k + ' = ' + j * k);
  }
}

let myArray = ['flash', 'superman', 'batman'];
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}

// break and continue

for (let i = 0; i <= 20; i++) {
  if (i == 5) {
    console.log('Detected 5');
    break;
  }
  console.log(`Value of i is ${i}`);
}

// Value of i is 0
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Detected 5

for (let j = 0; j <= 20; j++) {
  if (j == 5) {
    console.log('Detected 5');
    continue;
  }
  console.log(`Value of j is ${j}`);
}

// Value of j is 0
// Value of j is 1
// Value of j is 2
// Value of j is 3
// Value of j is 4
// Detected 5
// Value of j is 6
// Value of j is 7
// Value of j is 8
// Value of j is 9
// Value of j is 10
// Value of j is 11
// Value of j is 12
// Value of j is 13
// Value of j is 14
// Value of j is 15
// Value of j is 16
// Value of j is 17
// Value of j is 18
// Value of j is 19
// Value of j is 20
