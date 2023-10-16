/*simple JS program to play rock, paper, scissors*/

/*array of possible choices*/
const choices = ['rock', 'paper', 'scissors'];

/*check user input is valid*/
const getUserChoice = userInput => {

    if (typeof userInput !== 'string') {
        console.log("Error: Input Must Be Plain Text");
        return;
    };

    userInput = userInput.toLowerCase();

    if (!choices.includes(userInput)) {
        console.log("Error: Please choose Rock, Paper or Scissors.");
        return;
    };

    return userInput;

}

/*simulate computer's choice*/
const getComputerChoice = () => {

    let choice = Math.floor(Math.random() * 3);

    return choices[choice];

}

/*determine winner of game*/
const determineWinner = (userChoice, computerChoice) => {

    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (userChoice === 'rock') {
        return computerChoice === 'paper' ? "Computer wins!" : "Player wins!";
    }

    if (userChoice === 'scissors') {
        return computerChoice === 'rock' ? "Computer wins!" : "Player wins!";
    }

    if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? "Computer wins!" : "Player wins!";
    }

}

/*run above functions to play rock, paper, scissors*/
const playGame = choice => {

    const userChoice = getUserChoice(choice);

    const computerChoice = getComputerChoice();

    console.log(`You played: ${userChoice}`);

    console.log(`Computer played: ${computerChoice}`);

    console.log(determineWinner(userChoice, computerChoice));

}

/*test cases*/
playGame('test');
playGame(21);
playGame('rock');
playGame('paper');
playGame('scissors');

