const task3Element = document.getElementById('task-3');

function hello() {
  alert('Hello, World!');
}

function hi(name) {
  alert('Hi, ' + name);
}

hello();
hi('Soulyana');

task3Element.addEventListener('click', hello);

function bmf(bInput, mInput, fInput) {
  return `${bInput} ${mInput} ${fInput}`;
}

alert(bmf('black', 'mafia', 'family'));
