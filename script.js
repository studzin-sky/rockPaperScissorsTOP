function computerPlay() {                       //function for a random browser choice
    let playChoice = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = playChoice[Math.floor(Math.random() * playChoice.length)];
    return computerChoice;
}

const button = document.querySelectorAll('button');     // constant for a button queryselector

//create a function that adds a score for a player or browser depending on game outcome
function gameScore(result) {
    if (result.includes('win')) {
        playOutcome.innerHTML += '<li>1</l1>';
        browserOutcome.innerHTML += '<li>0</li>';
    }
    else if (result.includes('lose')) {
        playOutcome.innerHTML += '<li>0</li>';
        browserOutcome.innerHTML += '<li>1</li>';
    }
    else {
        playOutcome.innerHTML += '<li>0</li>';
        browserOutcome.innerHTML += '<li>0</li>';
    }
}
//declare a function for a round with a browser based on a players choice, it returns two values in an array
function playRound(choice) {
    let point = 0;
    let computerSelection = computerPlay();
    if (choice == 'rock' & computerSelection === 'Paper'){
        result = 'You lose! Paper beats Rock!';
        point -= 1;
    }
    else if (choice == 'rock' & computerSelection ==='Scissors'){
        result = 'You win! Rock beats Scissors!';
        point += 1;
    }
    else if (choice == 'rock' & computerSelection ==='Rock'){
        result = 'It is a draw!';
    }
    else if (choice == 'scissors' & computerSelection ==='Rock'){
        result = 'You lose! Rock beats Scissors!';
        point -= 1;
    }
    else if (choice == 'scissors' & computerSelection ==='Paper'){
        result = 'You win! Scissors beats Paper!';
        point += 1;
    }
    else if (choice == 'scissors' & computerSelection ==='Scissors'){
        result = 'It is a draw!';
    }
    else if (choice == 'paper' & computerSelection ==='Scissors'){
        result = 'You lose! Scissors beats Paper!';
        point -= 1;
    }
    else if (choice == 'paper' & computerSelection ==='Rock'){
        result = 'You win! Paper beats Rock!';
        point += 1;
    }
    else if (choice == 'paper' & computerSelection ==='Paper'){
        result = 'It is a draw!';
    }
return [result, point];
}


//create a variable for a players selection, when the player clicks the button round of game is being played.
let playerSelection = button.forEach(e => {         
    e.addEventListener('click', () => {   
        let roundResult = playRound(e.id);  //result of a round based on argument id
        let scorePrint = gameScore(roundResult[0]); // function that adds score to the leaderboard from index 0
        roundOutcome.innerText = roundResult[0];   // result of one round is shown from functions index 0
        let gameWin = gameResult;
        gameWin.innerText += roundResult[1];
        console.log(gameWin);
    });
});

const playOutcome = document.getElementById('playOutcome');
const roundOutcome = document.getElementById('roundOutcome');
const gameResult = document.getElementById('gameResult');
const browserOutcome = document.getElementById('browserOutcome');
