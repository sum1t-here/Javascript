// Literal means Literally an object

const user = {
  username: 'Sumit',
  loginCount: 0,
  signedIn: true,

  getUserdetails: function () {
    console.log('Got user details');
    // console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserdetails());

// Sumit
// Got user details
// undefined

// console.log(this) :10

// {
//     username: 'Sumit',
//     loginCount: 0,
//     signedIn: true,
//     getUserdetails: [Function: getUserdetails]
//   }

// const promiseOne = new Promise();
// const date = new Date();

// new keyword is actually a constructor function .
// Constructor function allows to create multiple new instance from a single object

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
  //   return is implicitly defined no problem if it is not written
}

const userOne = new User('Bhupendar Jogi', 0, true);
const userTwo = new User('Overwritten', 0, false);

// If new not written infront of User call the second one overwrites the first one

// new creates a new object
// constructor function is called because of new
// this keyword (arguements) are injected
// returned

console.log(userOne);

// <ref *1> Object [global] {
//   global: [Circular *1],
//   queueMicrotask: [Function: queueMicrotask],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   structuredClone: [Function: structuredClone],
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: Performance {
//     nodeTiming: PerformanceNodeTiming {
//       name: 'node',
//       entryType: 'node',
//       startTime: 0,
//       duration: 102.34500002861023,
//       nodeStart: 20.572374939918518,
//       v8Start: 37.10929203033447,
//       bootstrapComplete: 91.4757080078125,
//       environment: 61.488207936286926,
//       loopStart: -1,
//       loopExit: -1,
//       idleTime: 0
//     },
//     timeOrigin: 1698519823207.367
//   },
//   fetch: [AsyncFunction: fetch],
//   username: 'Bhupendar Jogi',
//   loginCount: 0,
//   isLoggedIn: true
// }

console.log(userOne.constructor);
// [Function: User]
