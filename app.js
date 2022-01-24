

var userCount = 0
var computerCount = 0
let scissorDiv = document.getElementsByClassName('choice-s')[0]
let paperDiv = document.getElementsByClassName('choice-p')[0]
let rockDiv = document.getElementsByClassName('choice-r')[0]
let userScore = document.getElementsByClassName('user-score')[0]
let computerScore = document.getElementsByClassName('computer-score')[0]


function win() {
    userCount++
    userScore.innerHTML = userCount
    setTimeout(() => gameOver(), 100)
}

function lose() {
    computerCount++
    computerScore.innerHTML = computerCount
    setTimeout(() => gameOver(), 100)
}

function draw() {
    computerScore.innerHTML = computerCount
    userScore.innerHTML = userCount
}




function computerPlay() {
    let choices = ['r', 'p', 's']
    let randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]

}

function playGame(playerSelection) {
    let computerSelection = computerPlay()
    switch (playerSelection + computerSelection) {
        case 'sp':
        case 'pr':
        case 'rs':
            win()
            break;
        case 'sr':
        case 'ps':
        case 'rp':
            lose()
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            draw()
            break;
    }
}



function game() {
    paperDiv.addEventListener('click', () => playGame('p'))
    scissorDiv.addEventListener('click',() => playGame('s'))
    rockDiv.addEventListener('click', () => playGame('r'))
}

function gameOver() {
    if (userCount === 5) {
        alert('You win!')
        location.reload()
    }
    if (computerCount === 5) {
        alert('You lose!')
        location.reload()
    }
}

game()
