// rest operator

function calculateCartPrice(...num1) {
  return num1;
}

console.log(calculateCartPrice(200, 400, 500)); // [ 200, 400, 500 ]

function calculateCartPrice1(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice1(200, 400, 500, 800, 1000));

// [ 500, 800, 1000 ]
// val1 = 200
// val2 = 400

const user = {
  username: 'Sumit',
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user); // username is Sumit and price is 199

handleObject({
  username: 'Sam',
  price: 999,
});

// username is Sam and price is 999

const myNewArr = [200, 400, 100, 600];

function returnSecondVal(getArray) {
  return getArray[1];
}

console.log(returnSecondVal(myNewArr)); // 400
