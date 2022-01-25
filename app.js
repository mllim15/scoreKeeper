// assign var to player buttons
const buttonOne = document.getElementById('buttonOne');
const buttonTwo = document.getElementById('buttonTwo');
const playTo = document.getElementById('playTo');
const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const resetButton = document.getElementById('reset');

// assign var to player scores
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

buttonOne.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        if (p1Score === winningScore) {
            isGameOver = true;
            player1.classList.add('winner');
            player2.classList.add('loser');
            buttonOne.disabled = true;
            buttonTwo.disabled = true;
        }
        player1.textContent = p1Score;
    }
})

buttonTwo.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            player2.classList.add('winner');
            player1.classList.add('loser');
            buttonOne.disabled = true;
            buttonTwo.disabled = true;
        }
        player2.textContent = p2Score;
    }
})

// when user uses the selector to change playing to number
playTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    player1.textContent = 0;
    player2.textContent = 0;

    // reset the colors
    player1.classList.remove('winner', 'loser');
    player2.classList.remove('winner', 'loser');

    // reset disabled buttons
    buttonOne.disabled = false;
    buttonTwo.disabled = false;
}

/*
const updatePlayerOne = () => {
    let newScore = parseInt(oneScore.innerText);
    newScore++;
    oneScore.innerText = newScore;
}

const updatePlayerTwo = () => {
    let newScore = parseInt(twoScore.innerText);
    newScore++;
    twoScore.innerText = newScore;
}

const scoreReset = () => {
    player1.textContent = 0;
    player2.textContent = 0;
}
*/
