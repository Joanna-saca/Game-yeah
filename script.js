const box = document.getElementById('box');
const scoreDisplay = document.getElementById('score');
let score = 0;

function moveBox() {
  const area = document.getElementById('game-area');
  const x = Math.random() * (area.clientWidth - 50);
  const y = Math.random() * (area.clientHeight - 50);
  box.style.left = x + 'px';
  box.style.top = y + 'px';
}

box.addEventListener('click', () => {
  score++;
  scoreDisplay.textContent = score;
  moveBox();
});

moveBox();
