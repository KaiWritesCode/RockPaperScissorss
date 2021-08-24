const Rock = 1;
const Paper = 2;
const Scissors = 3;
let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard = document.querySelectorAll('.scoreboard')
const result_p = document.querySelector('.result, p')
const rockDiv = document.getElementById('rock')
const paperDiv = document.getElementById('paper')
const scissorsDiv = document.getElementById('scissors')
const displayYou = document.querySelector('#you-selection-picture')
const displayComp = document.querySelector('#comp-selection-picture')
const restartBtn = document.getElementById('reset')




function computerPlay() {
    const choices = ['r', 'p', 's']
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum]
}


function playerInput() {
    rockDiv.addEventListener('click', () => {
        game('r')
    })
    paperDiv.addEventListener('click', () => {
        game('p')
    })
    scissorsDiv.addEventListener('click', () => {
        game('s')
    })
}

playerInput()


function game(userChoice) {
    const computerChoice = computerPlay();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;

        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
            break
    }
}


function convertToWord(letter) {
    if (letter === 'r') {
        return 'ROCK'
    }
    else if (letter === 'p') {
        return 'PAPER'
    }
    else {
        return 'SCISSORS'
    }
}

function win(user, computer) {
    playerScore++
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `ROUND WON!!    ${convertToWord(user)} beats ${convertToWord(computer)}`
    playTo(playerScore, computerScore)

}

function lose(user, computer) {
    computerScore++
    playerScore_span.innerHTML = playerScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `ROUND LOST!! ${convertToWord(computer)} beats ${convertToWord(user)}`
    playTo(playerScore, computerScore)
}

function draw() {
    result_p.innerHTML = `IT'S A DRAW!! PICK AGAIN`
}

function playTo(playerScore, computerScore) {
    if (playerScore >= 5 && computerScore < 5) {
        result_p.textContent = 'Game Over. You Win!';
        playerScore_span.classList.add("winner")
        computerScore_span.classList.add("loser")
        rockDiv.classList.add('hide')
        scissorsDiv.classList.add('hide')
        paperDiv.classList.add('hide')
        restartBtn.classList.add('show')
    } else if (playerScore < 5 && computerScore >= 5) {
        result_p.textContent = 'Game Over. You Lose!';
        computerScore_span.classList.add("winner")
        playerScore_span.classList.add("loser")
        rockDiv.classList.add('hide')
        paperDiv.classList.add('hide')
        scissorsDiv.classList.add('hide')
        restartBtn.classList.add('show')
    }
}



restartBtn.addEventListener('click', () => {
    reset()
})

function reset() {
    playerScore = 0;
    computerScore = 0;
    computerScore_span.innerHTML = 0;
    playerScore_span.innerHTML = 0;
    computerScore_span.classList.remove("winner")
    playerScore_span.classList.remove("winner")
    playerScore_span.classList.remove("loser")
    computerScore_span.classList.remove("loser")
    rockDiv.classList.remove('hide')
    paperDiv.classList.remove('hide')
    scissorsDiv.classList.remove('hide')
    console.log(playerScore)
    result_p.textContent = 'Play Again'
}