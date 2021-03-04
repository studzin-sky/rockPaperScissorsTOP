// declare variables for player and browser points
let playerScore = 0;
let computerScore = 0;

//function for a random browser choice
function computerPlay() {                      
    let playChoice = ['Rock', 'Paper', 'Scissors'];
    let computerChoice = playChoice[Math.floor(Math.random() * playChoice.length)];
    return computerChoice;
}

// constant for a button queryselector
const button = document.querySelectorAll('button');     

//declare a function to disable player choice buttons when being called
function disableButtons(){
    button.forEach(elem => {
        elem.disabled = true;
    })
}

//create a function that adds a score for a player or browser depending on game outcome, counts points and when reaching 5 points adds a button to refresh the game
function gameScore(result) {
    if (result.includes('win')) {
        playOutcome.innerHTML ++;
        playerScore += 1;
        if (playerScore == 5) {
            console.log('You win!');
            gameResult.innerHTML = '<input type="button" id="finalScore" value="You win! Play again!" onClick="document.location.reload(true)">';
            disableButtons();
        }
    }
    else if (result.includes('lose')) {
        browserOutcome.innerHTML ++;
        computerScore +=1;
        if (computerScore == 5) {
            console.log('You lose!');
            gameResult.innerHTML = '<input type="button" id="finalScore" value="You lose... Play again!" onClick = "document.location.reload(true)">';
            disableButtons();
        }
    }
    else {}
}

//declare a function for a round with a browser based on a players choice
function playRound(choice) {
    let computerSelection = computerPlay();
    if (choice == 'rock' & computerSelection === 'Paper'){
        result = 'You lose! Paper beats Rock!';
    }
    else if (choice == 'rock' & computerSelection ==='Scissors'){
        result = 'You win! Rock beats Scissors!';
    }
    else if (choice == 'rock' & computerSelection ==='Rock'){
        result = 'It is a draw!';
    }
    else if (choice == 'scissors' & computerSelection ==='Rock'){
        result = 'You lose! Rock beats Scissors!';
    }
    else if (choice == 'scissors' & computerSelection ==='Paper'){
        result = 'You win! Scissors beats Paper!';
    }
    else if (choice == 'scissors' & computerSelection ==='Scissors'){
        result = 'It is a draw!';
    }
    else if (choice == 'paper' & computerSelection ==='Scissors'){
        result = 'You lose! Scissors beats Paper!';
    }
    else if (choice == 'paper' & computerSelection ==='Rock'){
        result = 'You win! Paper beats Rock!';
    }
    else if (choice == 'paper' & computerSelection ==='Paper'){
        result = 'It is a draw!';
    }
return result;
}


//create a click event for a players selection, when the player clicks the button round of game is being played.
let playerSelection = button.forEach(e => {         
    e.addEventListener('click', () => {   
        let roundResult = playRound(e.id);  //result of a round based on argument id
        let scorePrint = gameScore(roundResult); // function that adds score to the leaderboard 
        roundOutcome.innerText = roundResult;  // result of one round is shown from function
    });
});

const playOutcome = document.getElementById('playOutcome');
const roundOutcome = document.getElementById('roundOutcome');
const gameResult = document.getElementById('gameResult');
const browserOutcome = document.getElementById('browserOutcome');
