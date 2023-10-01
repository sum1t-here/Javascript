// Immediately invoked function expression (IIFE)

(function db() {
  // named iifee
  console.log('DB connected');
})(); // DB connected

// remember the semicolon at end or else you will encouter error when writing two iifee

// ()()

// sometimes there is pollution from global scope, to prevent this iifee is used

((name) => {
  // unnamed iifee
  console.log(`DB connected iifee ${name}`);
})('Sumit'); // DB connected iifee Sumit
