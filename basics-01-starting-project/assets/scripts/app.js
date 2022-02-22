const defaultResult = 0;
let currentResult = defaultResult;

// function
function add() {
  currentResult += +userInput.value;
  outputResult(currentResult, '');
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
