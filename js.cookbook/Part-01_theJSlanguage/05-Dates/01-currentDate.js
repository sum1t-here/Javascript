// getting current date and time

const today = new Date();
console.log(today);

// 2024-02-23T15:18:42.064Z

// date methods for getting dates information

// getFullYear()
// getMonth() 0 - 11
// getDate() 1-31
// getDay() 0-6
// getHours() 0-23
// getMinutes() 0-59
// getSeconds() 0-99
// getMilliseconds() 0-999

const anotherDay = new Date(2021, 1, 1, 9, 30);
console.log(anotherDay);
// 2021-02-01T04:00:00.000Z

// T in this string separates the the date from the time,
// and the Z at the end of the string indicates it’s a universal time
// using the UTC time zone, which is the best way to ensure consistency
// on different computers.

const stringDate = "12/30/2021";
// Split on the slashes
const dateArray = stringDate.split("/");
// Find the individual date ingredients
const year = dateArray[2];
const month = dateArray[0];
const day = dateArray[1];
// Apply the correction for 0-based month numbering
const eventDate = new Date(year, month - 1, day);
console.log(eventDate);

// three weeks in the future

const thisDay = new Date();
const currentDate = today.getDate();

thisDay.setDate(currentDate + 21);
console.log(`Three weeks from now ${thisDay}`);
// Three weeks from now Fri Mar 15 2024 21:08:44 GMT+0530 (India Standard Time)

const originalDate = new Date();
// clone the date
const futureDate = new Date(originalDate.getTime());
// change the cloned date
futureDate.setDate(originalDate.getDate() + 21);
// negative value can also be used with setDate
console.log(`Three weeks from ${originalDate} is ${futureDate}`);
// Three weeks from Fri Feb 23 2024 21:14:30 GMT+0530 (India Standard Time) is Fri Mar 15 2024 21:14:30 GMT+0530 (India Standard Time)

// comparing dates and testing dates for equality

const date1 = new Date(2024, 2, 24);
const date2 = new Date(2024, 2, 24);

console.log(date1 === date2); // false
// as they are diffrent objects

console.log(date1.getTime() === date2.getTime()); // true
// This is true, because they have the same date

// calculating the ellapsed time between two dates

// yy/mm/dd
const newDate = new Date(2024, 2, 24);
const oldDate = new Date(2024, 2, 16);

const differentMilliSeconds = newDate - oldDate;
console.log(differentMilliSeconds);
// 691200000

const milliSecondsPerDay = 1000 * 60 * 60 * 24;
const differenceInDay = differentMilliSeconds / milliSecondsPerDay;

const differenceInDays = Math.trunc(differenceInDay);
console.log(differenceInDays);
// 8

// capture a high-resolution timestamp that’s accurate to fractions of a millisecond,
// if supported by the system only in browser environment

// // get a DOMHighResTimeStamp object that represents the start time
// const startTime = window.performance.now();

// // similary an end time
// const endTime = window.performance.now();

// const elapsedTime = startTime - endTime;
// console.log(elapsedTime);

// formatting a date value as a string

const date = new Date(2024, 1, 24);

let dateString;
dateString = date.toString();
console.log(dateString);
// Sat Feb 24 2024 00:00:00 GMT+0530 (India Standard Time)
dateString = date.toUTCString();
console.log(dateString);
// Fri, 23 Feb 2024 18:30:00 GMT
dateString = date.toDateString();
console.log(dateString);
// Sat Feb 24 2024
dateString = date.toISOString();
console.log(dateString);
// 2024-02-23T18:30:00.000Z
dateString = date.toLocaleDateString();
console.log(dateString);
// 2/24/2024
dateString = date.toLocaleTimeString();
console.log(dateString);
// 12:00:00 AM

const newDay = new Date(2024, 2, 24);
// Ensure date numbers less than 10 are padded with an initial 0.
const day_ = newDay.getDate().toString().padStart(2, "0");
// Ensure months are 0-padded and add 1 to convert the month from its
// 0-based JavaScript representation
const month_ = (newDay.getMonth() + 1).toString().padStart(2, "0");
// The year is always 4-digit
const year_ = newDay.getFullYear();
const customDateString = `${year_}.${month_}.${day_}`;
console.log(customDateString);
// 2024.03.24

// This approach is extremely flexible, but it forces you to write your own date boilerplate,
// which isn’t ideal because it adds complexity and creates room for new bugs.

// Use the standard US date format
console.log(new Intl.DateTimeFormat("en-US").format(newDay));
console.log(new Intl.DateTimeFormat("en-GB").format(newDay));
console.log(new Intl.DateTimeFormat("ja-JP").format(newDay));
// 3/24/2024
// 24/03/2024
// 2024/3/24

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
});

console.log(formatter.format(newDay));
// March 24, 2024 at 12:00 AM
