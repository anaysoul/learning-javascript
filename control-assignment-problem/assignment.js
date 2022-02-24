const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// question 1
// while (randomNumber > 0.7) {
//   alert('Hiyyya!');
// }

// question 2
const numbers = [1, 2, 3, 4, 5, 6, 7];
for (number in numbers) {
  console.log(numbers[number]);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// question 3
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

// question 4
const randNum = Math.random();
if (
  (randomNumber > 0.7 && randNum > 0.7) ||
  randNum <= 0.2 ||
  randomNumber <= 0.2
) {
  console.log(randomNumber, randNum);
  alert('woooow!');
}
