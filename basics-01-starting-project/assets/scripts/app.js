const defaultResult = 0;
let currentResult = defaultResult;

// function
function add(num1, num2) {
  const result = num1 + num2;
  alert('The result is ' + result);
}
add(1, 2);
add(5, 5);

function subtract(num1, num2) {
  return num2 - num1;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num2 / num1;
}

currentResult += 10;

// template literal
let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
