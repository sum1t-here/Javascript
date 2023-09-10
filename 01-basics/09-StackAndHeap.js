// Stack gives copy (Primitive), heap gives reference (non - primitive)

let name = 'xxx'; // stored in stack

let another = name; // gets a copy of name
another = 'yyy';

console.log(another); // yyy # no effect on name as it was its copy

let user = {
  email: 'abc@gmail.com',
  upi: 'user@sbi',
}; // user var is stored in stack but its value is stored in heap

let user1 = user; // user's values accessed from heap

user1.email = 'xyz@gmail.com';

console.log(user1.email); // xyz@gmail.com
console.log(user.email); // xyz@gmail.com
