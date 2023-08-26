const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance); // [Number: 100]
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); // 123.9

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000
console.log(hundreds.toLocaleString('en-US')); // 1,000,000

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4)); // 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4, 3, 6, 8)); // 3
console.log(Math.max(4, 3, 6, 8)); // 8
