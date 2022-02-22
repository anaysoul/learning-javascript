const defaultResult = 0;
let currentResult = defaultResult;

// function
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enteredNumber}`;
  currentResult += enteredNumber;
  outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);

function subtract() {
  currentResult -= +userInput.value;
  outputResult(currentResult, '');
}

function multiply() {
  currentResult *= +userInput.value;
  outputResult(currentResult, '');
}

function divide() {
  currentResult /= +userInput.value;
  outputResult(currentResult, '');
}
