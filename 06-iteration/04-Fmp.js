const coding = ['js', 'ruby', 'java', 'python', 'cpp'];

const values = coding.forEach((item) => {
  console.log(item);
  //   if use return
  return item; // still undefined
});

console.log(values); // undefined

// js
// ruby
// java
// python
// cpp
// undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);
// [ 5, 6, 7, 8, 9, 10 ]

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });

const newNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    newNums.push(num);
  }
});

console.log(newNums);
// [ 5, 6, 7, 8, 9, 10 ]

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1990, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 1980, edition: 2012 },
  { title: 'Book Six', genre: 'Fiction', publish: 1995, edition: 2000 },
  { title: 'Book Seven', genre: 'History', publish: 1996, edition: 2003 },
  { title: 'Book Eight', genre: 'Science', publish: 1967, edition: 2005 },
  { title: 'Book Nine', genre: 'Horror', publish: 1959, edition: 2008 },
  { title: 'Book Ten', genre: 'Non-Fiction', publish: 2003, edition: 2009 },
  { title: 'Book Eleven', genre: 'Science', publish: 2002, edition: 2010 },
  { title: 'Book Twelve', genre: 'Horror', publish: 2004, edition: 2011 },
];

let userBooks = books.filter((bk) => bk.genre === 'History');
// overwriting
userBooks = books.filter((bk) => {
  // scope
  return bk.publish >= 2000 && bk.genre === 'History';
});
console.log(userBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myNumbers.map((num) => num + 10));

// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
// ]

// chaining: using two or more methods at the same time

const newNumber = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);
console.log(newNumber);

// [
//     41, 51,  61, 71,
//     81, 91, 101
// ]

// reduce
const myNums1 = [1, 2, 3];

// const myTotal = myNums1.reduce(function (acc, curval) {
//   console.log(`acc: ${acc} and curval: ${curval}`);
//   return acc + curval;
// }, 0);

// acc: 0 and curval: 1
// acc: 1 and curval: 2
// acc: 3 and curval: 3

const myTotal = myNums1.reduce((acc, curval) => acc + curval, 0);

console.log(myTotal); // 0 + 1 + 2 + 3 = 6

const shoppingCart = [
  {
    itename: 'jsCourse',
    price: 2999,
  },
  {
    itename: 'python',
    price: 499,
  },
  {
    itename: 'React Native',
    price: 5999,
  },
  {
    itename: 'Data Science',
    price: 6999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay); // 16496
