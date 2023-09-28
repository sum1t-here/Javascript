let a = 10;
const b = 20;
var c = 30;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

if (true) {
  let d = 10;
  const e = 20;
  var f = 30;
  let a = 300;

  console.log('Inner a is', a); // Inner a is 300
}

// console.log(d); // d is not defined
// console.log(e); //  e is not defined
console.log(f); // 30
