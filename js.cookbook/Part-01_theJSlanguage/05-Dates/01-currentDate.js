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
console.log(`Three weeks from ${originalDate} is ${futureDate}`);
// Three weeks from Fri Feb 23 2024 21:14:30 GMT+0530 (India Standard Time) is Fri Mar 15 2024 21:14:30 GMT+0530 (India Standard Time)
