const defaultResult = 0;
let currentResult = defaultResult;

// function
function add() {
  currentResult += userInput.value;
  outputResult(currentResult, '');
}

function subtract(num1, num2) {
  return num2 - num1;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 / num1;
}

addBtn.addEventListener('click', add);
