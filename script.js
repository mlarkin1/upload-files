'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' Correct Number! 🎱';
document.querySelector('.guess').value = '';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(document.querySelector('.guess').value, `This is the value`);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' Correct Number! 🎱';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = ' Too High!📈';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = ' Too Low!📉';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
