"use strict";

// Selecting an element.
console.log(document.querySelector(".message").textContent);

// Set value.
document.querySelector(".guess").value = 23;

// To get the value of an element.
console.log(document.querySelector(".guess").value);

// Establish random number.
const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;

// Listen to event on Check button.
// Name of event, and tell the listener what to do.
// Function only be called as soon as the event happens.
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // Check if value from user, if no value, print something to console.
  // Always assume there is no data at first.
  if (!guess) {
    document.querySelector(".message").textContent = `No number! 😔`;

    // Now compare secret number we generated to number input by user.
    // Decrease score if guess is too high or too low.
  } else if (guess === number) {
    document.querySelector(".message").textContent = `Correct Number!🥳`;
    // This displays number only if the player guesses.
    document.querySelector(".number").textContent = number;

    // Change colour of background to green when the player wins.
    document.querySelector("body").style.backgroundColor = "#60b347";
    // Makes the main number wider upon win.
    document.querySelector(".number").style.width = "30rem";
    // Display the number.
  } else if (guess > number) {
    //   End game if score goes below 0.
    if (score > 1) {
      document.querySelector(
        ".message"
      ).textContent = `Your guess is too big! 🐘`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game! 💀`;
    }
  } else if (guess < number) {
    document.querySelector(
      ".message"
    ).textContent = `Your guess is too small! 🐭`;
    score--;
    document.querySelector(".score").textContent = score;
  }
});

// Re-set the page on the Again button.
document.querySelector(".again").addEventListener("click", function() {
    
});
