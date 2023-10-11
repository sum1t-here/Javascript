// Initialize a random number between 1 and 100 (inclusive).
let randomNumber = parseInt(Math.random() * 100 + 1);

// Get references to HTML elements.
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// Create a paragraph element to be used for messages.
const p = document.createElement('p');

// Initialize variables to keep track of the game state.
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Add a click event listener to the submit button.
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

// Function to validate the user's guess.
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number.');
  } else if (guess < 1) {
    alert('Please enter a number more than 1.');
  } else if (guess > 100) {
    alert('Please enter a number less than 100.');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. Random number was ${randomNumber}`);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

// Function to check the user's guess against the random number.
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guessed it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high');
  }
}

// Function to display the user's guess.
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `; // Append each guess.
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

// Function to display messages to the user.
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// Function to end the game.
function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newGame'>Start new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

// Function to start a new game.
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
