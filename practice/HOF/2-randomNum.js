// Random Number Generator with Delay and Progress Indication:

// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.

const genRandomNumber = (delayInSec) => {
  let timeRemaining = delayInSec;
  let progressInterval;

  console.log(`Generating a random number in ${timeRemaining} sec ....`);
  progressInterval = setInterval(() => {
    timeRemaining--;
    console.log(`Time remaining ${timeRemaining} sec ...`);

    if (timeRemaining === 0) {
      clearInterval(progressInterval);
      randomNum();
    }
  }, 1000);
};

const randomNum = () => {
  setTimeout(() => {
    const randomnum = Math.floor(Math.random() * 100);
    console.log(`Random number generated ${randomnum}`);
  }, 0);
};

const delayInSec = 3;

genRandomNumber(delayInSec);

// Output :

// Generating a random number in 3 sec ....
// Time remaining 2 sec ...
// Time remaining 1 sec ...
// Time remaining 0 sec ...
// Random number generated 83
