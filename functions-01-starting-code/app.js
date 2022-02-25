const startGameBtn = document.getElementById('start-game-btn');

// function expression with anonymous function
const start = function () {
  console.log('Game is starting...');
};

// const person = {
//   name: 'Max',
//   greet: function greet() {
//     //methods
//     console.log('Hello there!');
//   },
// };

// person.greet();

// console.dir(startGame);

startGameBtn.addEventListener('click', start);
