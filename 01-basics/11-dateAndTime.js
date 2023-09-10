// Dates

let myDate = new Date();
console.log(myDate.toString()); // Sun Sep 10 2023 21:59:48 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sun Sep 10 2023
console.log(myDate.toLocaleString()); // 9/10/2023, 10:02:11 PM
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 (month starts from 0)

let myCreatedDate1 = new Date('2023-01-14');
console.log(myCreatedDate1.toDateString()); // Sat Jan 14 2023

let myCreatedDate2 = new Date('01-14-2023');
console.log(myCreatedDate2.toDateString()); // Sat Jan 14 2023

let myTimeStamp = Date.now();
console.log(myTimeStamp); // 1694363891111 miliseconds from begining till now

console.log(myCreatedDate.getTime()); // 1674412200000

console.log(Math.floor(Date.now() / 1000)); // 1694364049

console.log(myDate.getMonth()); // 8

console.log(
  myDate.toLocaleString('default', {
    weekday: 'long',
  })
); // Sunday
