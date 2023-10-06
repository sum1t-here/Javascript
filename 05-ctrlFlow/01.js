// if

const isUserLoggediIn = true;

if (2 == '2') {
  console.log('executed'); // executed
}

if (2 === '2') {
  console.log('executed');
}

// <, >, <=, >=, ==, !=, ===

const score = 200;

if (score > 100) {
  const power = 'fly';
  console.log(`User power: ${power}`); // User power: fly
}

const balance = 1000;

// not a good practice
// if (balance > 500) console.log('test'), console.log('test2');

// if (balance < 500) {
//   console.log('less than 500');
// } else if (balance < 750) {
//   console.log('less than 750');
// } else if (balance < 900) {
//   console.log('less than 900');
// } else {
//   console.log('less than 1200');
// }

const userLoggedIn = true;
const debitCard = true;

const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const guest = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log('Allow to buy course');
}

if (loggedInFromEmail || loggedInFromGoogle || guest) {
  console.log('User logged in');
}
