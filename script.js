// Random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Game settings
let maxAttempts = 10;
let attemptsLeft = maxAttempts;

// Select elements
const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const restartBtn = document.getElementById("restartBtn");

// Display attempts
attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;

// Check guess
submitBtn.addEventListener("click", function () {
    let userGuess = Number(guessInput.value);

    // Validation
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "Please enter a number between 1 and 100!";
        return;
    }

    attemptsLeft--;
    attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Congratulations! You guessed it right!";
        endGame();
    } 
    else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high! Try again.";
    } 
    else {
        message.textContent = "📈 Too low! Try again.";
    }

    // Check attempts
    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = `❌ Game Over! The number was ${randomNumber}`;
        endGame();
    }

    guessInput.value = "";
});

// End game function
function endGame() {
    submitBtn.disabled = true;
    restartBtn.style.display = "inline-block";
}

// Restart game
restartBtn.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;

    attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
    message.textContent = "";
    guessInput.value = "";

    submitBtn.disabled = false;
    restartBtn.style.display = "none";
});
