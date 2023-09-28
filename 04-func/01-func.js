function SayMyName() {
  console.log('Sumit');
}

SayMyName(); // Sumit

function addTwoNum(num1, num2) {
  console.log(num1 + num2);
}

addTwoNum(); // NaN
addTwoNum(3, 4); // 7
addTwoNum(3, '4'); // 34

const result = addTwoNum(5, 3); // 8
console.log('Result : ', result); // Result : undefined

function addTwoNum1(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  //   console.log(Sumit); nothing is printed after result

  return num1 + num2;
}

const result1 = addTwoNum1(5, 3);
console.log('Result : ', result1); // Result :  8

function loginUserMessage(
  username
  // username='Sam'
) {
  if (
    //username === undefined
    !username
  ) {
    console.log('Please enter a username');
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage('HEHEH')); // HEHEH just logged in
