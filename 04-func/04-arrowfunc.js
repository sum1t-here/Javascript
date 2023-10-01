const user = {
  username: 'Sumit',
  price: 999,

  welcomeMessage: function () {
    // this -> use to acess the current context
    console.log(`${this.username}, welcome to the website`);
    console.log(this);
  },
};

user.welcomeMessage();
// Sumit, welcome to the website
// {
//     username: 'Sumit',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

user.username = 'Sam';
user.welcomeMessage();
// Sam, welcome to the website
// {
//     username: 'Sam',
//     price: 999,
//     welcomeMessage: [Function: welcomeMessage]
//   }

console.log(this); // {}
// but in browser it prints window, which a global object

// function chai() {
//   let username = 'Sumit';
//   console.log(this); // prints the global object below
// }

// chai();

// // <ref *1> Object [global] {
// //   global: [Circular *1],
// //   queueMicrotask: [Function: queueMicrotask],
// //   clearImmediate: [Function: clearImmediate],
// //   setImmediate: [Function: setImmediate] {
// //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //   },
// //   structuredClone: [Function: structuredClone],
// //   clearInterval: [Function: clearInterval],
// //   clearTimeout: [Function: clearTimeout],
// //   setInterval: [Function: setInterval],
// //   setTimeout: [Function: setTimeout] {
// //     [Symbol(nodejs.util.promisify.custom)]: [Getter]
// //   },
// //   atob: [Function: atob],
// //   btoa: [Function: btoa],
// //   performance: Performance {
// //     nodeTiming: PerformanceNodeTiming {
// //       name: 'node',
// //       entryType: 'node',
// //       startTime: 0,
// //       duration: 72.72795802354813,
// //       nodeStart: 20.09891700744629,
// //       v8Start: 33.67716699838638,
// //       bootstrapComplete: 65.9375,
// //       environment: 50.024416983127594,
// //       loopStart: -1,
// //       loopExit: -1,
// //       idleTime: 0
// //     },
// //     timeOrigin: 1696185998203.511
// //   },
// //   fetch: [AsyncFunction: fetch]
// // }

//function chai() {
//   let username = 'Sumit';
//   console.log(this.username);

// chai(); // undefined
// }

// const chai = function () {
//   let username = 'Sumit';
//   console.log(this.username);
// };
// chai(); // undefined

const chai = () => {
  let username = 'Sumit';
  console.log(this.username);
};

chai(); // undefined

const coffee = () => {
  let username = 'Sumit';
  console.log(this.username);
};

coffee(); // {}

// Arrow function

// const add2 = (num1, num2) => {
//   return num1 + num2;
// }; // explicit return

// const add2 = (num1, num2) => num1 + num2; // implicit return

// returning object using arrow function
const add2 = (num1, num2) => ({ username: 'Sumit' });
