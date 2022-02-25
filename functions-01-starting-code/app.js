const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = 'ROCK';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(
    `${ROCK} ${PAPER} or ${SCISSORS}?`,
    ''
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue > 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// arrow function
// default arguments should be last
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

//   if (cChoice === pChoice) {
//     return RESULT_DRAW;
//   } else if (
//     (cChoice === ROCK && pChoice === PAPER) ||
//     (cChoice === PAPER && pChoice === SCISSORS) ||
//     (cChoice === SCISSORS && pChoice === ROCK)
//   ) {
//     return RESULT_PLAYER_WINS;
//   } else {
//     return RESULT_COMPUTER_WINS;
//   }

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log('Game is starting...!');
  const playerChoice = getPlayerChoice(); // might be undefined
  const computerChoice = getComputerChoice();
  let winner;
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice);
  } else {
    winner = getWinner(computerChoice);
  }

  let message = `You picked ${
    playerChoice || DEFAULT_USER_CHOICE
  }, computer picked ${computerChoice} so you `;
  if (winner === RESULT_DRAW) {
    message += 'had a draw!';
  } else if (winner === RESULT_PLAYER_WINS) {
    message += 'won!';
  } else {
    message += 'lost :(';
  }
  alert(message);
  gameIsRunning = false;
});

// not related to the game
//es6 - rest operator
const sumUp = (a, b, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

const subtractUp = function () {
  let sum = 0;
  // dont use; use rest parameter instead
  for (const num of arguments) {
    sum -= num;
  }
  return sum;
};

console.log(sumUp(2, 4, 5, 23, 12, 46, 23, 233));
console.log(subtractUp(2, 4, 5, 23, 12, 46, 12, 345, 562, 234));
