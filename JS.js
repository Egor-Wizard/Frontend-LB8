let playerScore = 0;
let computerScore = 0;

function startGame() {
    const playerName = document.getElementById('playerName').value;
    if (!playerName) {
        alert('Будь ласка, введіть своє ім\'я.');
        return;
    }

    const playerNumber = Math.floor(Math.random() * 10) + 1;
    const computerNumber = Math.floor(Math.random() * 10) + 1;

    document.getElementById('result').innerHTML = `${playerName}: ${playerNumber}, Комп'ютер: ${computerNumber}`;

    if (playerNumber > computerNumber) {
        playerScore++;
    } else if (playerNumber < computerNumber) {
        computerScore++;
    }

    document.getElementById('score').innerHTML = `Рахунок: ${playerName}: ${playerScore}, Комп'ютер: ${computerScore}`;

    if (playerScore === 3 || computerScore === 3) {
        const winner = playerScore === 3 ? playerName : "Комп'ютер";
        alert(`Гра завершена! ${winner} переміг!`);
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerName').value = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('score').innerHTML = '';
}
