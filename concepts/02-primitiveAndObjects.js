// 7 primitive data types Null, Number, String, Symbol, Undefined, Boolean, BigInt

let a = null;
let b = 2;
let c = true; // also can be false
let d = BigInt(567);
let e = 'Hello';
let f = Symbol('I am a symbol');
let g = undefined;
let h; // undefined

console.log(a, b, c, d, e, f, g, h); // null 2 true 567n Hello Symbol(I am a symbol) undefined undefined

console.log(typeof d); // bigint

// objects are key-value pair (non-primitive)

const item = {
  Hello: true,
  World: 1,
  JS: undefined,
};

console.log(item['Hello']); // true
console.log(item.World); // 1
console.log(item.Hello); // true
