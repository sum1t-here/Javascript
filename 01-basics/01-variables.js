let a = 67;
console.log(a); // 67

a = 'hello';
console.log(a); // hello

// A have both the values because js is dynamically typed language

// var(globally scoped by es6) , let & const (both are block scoped)

var b = 'world';
{
  var b = 'this';
  console.log(b); // this
}
console.log(b); // this

let c = 'world';
{
  let c = 'this';
  console.log(c); // this
}
console.log(c); // world

// this is what block scope means

// var can be updated and re-declared within its scope

var d = 2;
console.log(d); // 2

var d = 'p';
console.log(d); // p

// this can create bugs

// let can be updated but not redeclared
// const does neither
