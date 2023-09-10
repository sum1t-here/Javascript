// Create a variable of type string and add a variable to it

let a = 'hello';
const b = 2;

console.log(a + b); // hello2

// use typeof operator to the string

console.log(typeof (a + b)); // string

// try to add a new key to const object

const c = {
  Hello: true,
  World: 1,
  JS: undefined,
};

// c is reference to the object

// c = 4;
// console.log(c);  cannot change c

c.Hello = false;

c['Programming'] = 'yes';

console.log(c); // { Hello: false, World: 1, JS: undefined, Programming: 'yes' }

let d = 6;
let e = 3;

console.log(d + +e); // 9  In this line, the + operator is used twice. The first + is a unary plus operator which converts the value of e to a number. So, +e evaluates to 3 as a number. Then, d + +e becomes 6 + 3, which results in 9. Hence, the output is 9

console.log(typeof (d + +e)); // number

let f = 'he';
let g = 'llo';
console.log(f + +g); // heNaN (not a number)
