     //declare a function for a random computer choice
     function computerPlay() {
        let playChoice = ['Rock', 'Paper', 'Scissors'];
        let computerChoice = playChoice[Math.floor(Math.random() * playChoice.length)];
        return computerChoice;
    }
    // declare a function for a round of rps with a result
    
    
    function playRound() {
        let computerSelection = computerPlay();
        let playerSelection = prompt('Rock, Paper, Scissors?');
        if (playerSelection.toLowerCase() === 'rock' & computerSelection === 'Paper') {
            result = 'You lose! Paper beats Rock!';
            roundscore = ' 0 ';
            value = -1;
        }
        else if (playerSelection.toLowerCase() === 'rock' & computerSelection === 'Scissors') {
            result = 'You win! Rock beats Scissors!';
            roundscore = ' 1 ';
            value = 1;
        }
        else if (playerSelection.toLowerCase() === 'rock' & computerSelection === 'Rock') {
            result = 'It is a draw!';
            roundscore = ' / ';
            value = 0;
        }
        else if (playerSelection.toLowerCase() === 'scissors' & computerSelection === 'Rock') {
            result = 'You lose! Rock beats Scissors!';
            roundscore = ' 0 ';
            value = -1;
        }
        else if (playerSelection.toLowerCase() === 'scissors' & computerSelection === 'Paper') {
            result = 'You win! Scissors beats Paper!';
            roundscore = ' 1 ';
            value = 1;
        }
        else if (playerSelection.toLowerCase() === 'scissors' & computerSelection === 'Scissors') {
            result = 'It is a draw!';
            roundscore = ' / ';
            value = 0;
        }
        else if (playerSelection.toLowerCase() === 'paper' & computerSelection === 'Rock') {
            result = 'You win! Paper beats Rock!';
            roundscore = ' 1 ';
            value = 1;
        }
        else if (playerSelection.toLowerCase() === 'paper' & computerSelection === 'Scissors') {
            result = 'You lose! Scissors beats Paper!';
            roundscore = ' 0 ';
            value = -1;
        }
        else if (playerSelection.toLowerCase() === 'paper' & computerSelection === 'Paper') {
            result = 'It is a draw!';
            roundscore = ' / ';
            value = 1;
        }
        else {
            result = 'Chose correctly!!';
            roundscore = ' / ';
            value = 0;
        }
        return result;
    }
    
    //declare a game function that plays 5 round of the rock paper scissors game, keep track of the scores and reads the final result. 
    //with congratulatons
    
    function game() {
        let score = 'Score is: '
        let gameResult;
        let computerSelection = computerPlay();
        playRound();
            console.log(result);
            score += roundscore;
            gameResult = value;
        playRound();
            console.log(result);
            score += roundscore;
            gameResult += value;
        playRound();
            console.log(result);
            score += roundscore;
            gameResult += value;
        playRound();
            console.log(result);
            score += roundscore;
            gameResult += value;
        playRound();
            console.log(result);
            score += roundscore;
            gameResult += value;
        console.log(score);
    
        //if statement - adding the value variable from the function to get the final result of the game
        if (gameResult > 0) {
            console.log('Congratulations! You win!');
        }
        else if (gameResult < 0) {
            console.log('You lost the game.');
        }
        else if (gameResult == 0) {
            console.log('IT IS A DRAW!');
        }
    }
    
    game();
    