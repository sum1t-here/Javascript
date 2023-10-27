const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task:
  // DB calls, cryptography, network

  setTimeout(function () {
    console.log('Async task is completed');
    resolve(); // use this to connect with .then
  }, 1000);
});

// .then has an connection with resolve
// it has a callback that is a function, it automatically receives an value
//  from the above promise and return it

promiseOne.then(function () {
  console.log('Promise consumed');
});

// Async task is completed
// Promise consumed

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Async task 2!!!');
    resolve();
  }, 1000);
}).then(function () {
  console.log('Async task 2 resolved');
});

// Async task 2!!!
// Async task 2 resolved

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: 'Sumit', email: 'Sumit@example.com' });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

// { username: 'Sumit', email: 'Sumit@example.com' }

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: 'Sumit', email: 'Sumit@example.com' });
    } else {
      reject('Error: Something went wrong');
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(() => console.log('The promise is either rejected or resolved'));

//  when 48: let error = true
//  Error: Something went wrong
// The promise is either rejected or resolved

// when 48: let error = !true
// { username: 'Sumit', email: 'Sumit@example.com' }
// Sumit
// The promise is either rejected or resolved

const promiseFive = new Promise((resolve, reject) =>
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: 'JS', email: 'Sumit@example.com' });
    } else {
      reject('Error: JS went wrong');
    }
  }, 1000)
);

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log('E :', err);
//   }
// }

// getAllUsers();

fetch('https://api.github.com/users/sum1t-here')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
