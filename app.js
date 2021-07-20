// Generate a random number between 1 and 100.
// Record the turn number the player is on. Start it on 1.
// Provide the player with a way to guess what the number is.
// Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
// Next, check whether it is the correct number.
// If it is correct:
// Display congratulations message.
// Stop the player from being able to enter more guesses (this would mess the game up).
// Display control allowing the player to restart the game.
// If it is wrong and the player has turns left:
// Tell the player they are wrong and whether their guess was too high or too low.
// Allow them to enter another guess.
// Increment the turn number by 1.
// If it is wrong and the player has no turns left:
// Tell the player it is game over.
// Stop the player from being able to enter more guesses (this would mess the game up).
// Display control allowing the player to restart the game.
// Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.

// ADD YOUR VARIABLES
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let resetButton;
let guessCount = 1;

// CREATE A FUNCTION THAT WILL CHECK USERS GUESS
function checkGuess() {
 let userGuess = Number(guessField.value);
 // SHOW USERS PREVIOUS GUESSES
 if (guessCount === 1) {
  guesses.textContent = 'Previous Guesses: ';
 }
 guesses.textContent += userGuess + ' ';
 if (userGuess === randomNumber) {
  // CONGRATULATIONS
  lastResult.textContent = 'Congratulations! You guessed right.';
  lastResult.style.backgroundColor = 'green';
  lowOrHi.textContent = '';
  // start over, resetbutton
  gameOver();
 } else if (guessCount === 10) {
  // MAXED OUT GUESS COUNT
  lastResult.textContent = 'GAME OVER';

  // start over, resetbutton
  gameOver();
 } else {
  // USER STILL HAS MORE CHANCES TO GUESS
  lastResult.textContent = 'Wrong number, guess again.'
  lastResult.style.backgroundColor = 'red';

  // LET USER KNOW IF NUMBER PICKED WAS TOO HIGH/LOW
  if (userGuess < randomNumber) {
   lowOrHi.textContent = 'Number was too low.'
  } else if (userGuess > randomNumber) {
   lowOrHi.textContent = 'Number was too high.'
  }
 }
 // update guess count in code
 guessCount++;
 guessField.value = '';
 guessField.focus();
};
guessSubmit.addEventListener('click', checkGuess);

// CREATE FUNCTION FOR END OF GAME
function gameOver() {
 guessSubmit.disabled = true;
 guessField.disabled = true;
 resetButton = document.createElement('button');
 resetButton.textContent = 'Start Over';
 document.body.append(resetButton);
 resetButton.addEventListener('click', startOver);
}

// CREATE A FUNCTION TO RESTART THE GAME
function startOver() {
 guessCount = 1;

 const resetParas = document.querySelectorAll('.resultParas p');
 for (let i = 0; i < resetParas.length; i++) {
  resetParas[i].textContent = '';
 }

 resetButton.parentNode.removeChild(resetButton);

 guessField.disabled = false;
 guessSubmit.disabled = false;
 guessField.value = '';
 guessField.focus();

 lastResult.style.backgroundColor = 'white';

 randomNumber = Math.floor(Math.random() * 100) + 1;
}