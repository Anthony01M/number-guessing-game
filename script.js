document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attemptsLeft = 10;

    const guessInput = document.getElementById('guessInput');
    const guessButton = document.getElementById('guessButton');
    const restartButton = document.getElementById('restartButton');
    const message = document.getElementById('message');
    const attemptsLeftDisplay = document.getElementById('attemptsLeft');

    const resetGame = () => {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attemptsLeft = 10;
        guessInput.value = '';
        guessButton.disabled = false;
        restartButton.style.display = 'none';
        message.textContent = '';
        attemptsLeftDisplay.textContent = attemptsLeft;
    };

    guessButton.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        attemptsLeft--;

        if (userGuess === randomNumber) {
            message.textContent = 'Congratulations! You guessed the correct number!';
            guessButton.disabled = true;
            restartButton.style.display = 'block';
        } else if (attemptsLeft === 0) {
            message.textContent = `Game over! The correct number was ${randomNumber}.`;
            guessButton.disabled = true;
            restartButton.style.display = 'block';
        } else {
            message.textContent = userGuess > randomNumber ? 'Too high!' : 'Too low!';
            attemptsLeftDisplay.textContent = attemptsLeft;
        }
    });

    restartButton.addEventListener('click', resetGame);

    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#000000', '#FF5733', '#FF8C00', '#FFD700', '#ADFF2F', '#00FF7F', '#00CED1', '#1E90FF', '#9370DB', '#FF1493', '#000000'];
    let colorIndex = 0;

    setInterval(() => {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 5000);
});