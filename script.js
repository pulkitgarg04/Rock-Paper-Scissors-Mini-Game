'use strict';

let playerScore = 0;
let computerScore = 0;

const scorePlayer = document.querySelector('#score-player');
const scoreComputer = document.querySelector('#score-computer');
const infoBox = document.querySelector('.info');
const btnNew = document.querySelector('.btn-new');

const rockBtn = document.querySelector('.player-rock');
const paperBtn = document.querySelector('.player-paper');
const scissorsBtn = document.querySelector('.player-scissors');

const playerOptions = [rockBtn, paperBtn, scissorsBtn];
const computerOptions = ['ROCK', 'PAPER', 'SCISSORS'];

playerOptions.forEach(option => {
    option.addEventListener('click', function () {
        const index = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[index];
        console.log(this.innerText);
        infoBox.innerText = game(this.innerText, computerChoice);
    })
});

const game = function (playerChoice, computerChoice) {
    let resultMessage = '';
    if (playerChoice === computerChoice) {
        resultMessage = `Draw! You chose ${playerChoice} & Computer chose ${computerChoice}`;
    } else if (
        (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ) {
        playerScore += 1;
        resultMessage = `✅ You chose ${playerChoice} & Computer chose ${computerChoice}`;
    } else {
        computerScore += 1;
        resultMessage = `🖥️ You chose ${playerChoice} & Computer chose ${computerChoice}`;
    }
    updateScores();
    return resultMessage;
};

const updateScores = function () {
    scorePlayer.innerText = playerScore;
    scoreComputer.innerText = computerScore;
};

const init = function () {
    playerScore = 0;
    computerScore = 0;
    updateScores();
    infoBox.innerText = 'CHOOSE ABOVE TO START!';
};
init();

btnNew.addEventListener('click', init);