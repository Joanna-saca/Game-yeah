const hungerDisplay = document.getElementById('hunger');
const feedBtn = document.getElementById('feed-btn');
const fish = document.getElementById('fish');

let hunger = 100;

// Decrease hunger every second
setInterval(() => {
  hunger -= 2;
  if (hunger < 0) hunger = 0;
  updateFish();
}, 1000);

// Feed button increases hunger
feedBtn.addEventListener('click', () => {
  hunger += 20;
  if (hunger > 100) hunger = 100;
  updateFish();
});

function updateFish() {
  hungerDisplay.textContent = hunger;

  if (hunger > 70) {
    fish.style.backgroundColor = 'orange'; // happy
    fish.style.width = '70px';
  } else if (hunger > 30) {
    fish.style.backgroundColor = 'gold'; // okay
    fish.style.width = '60px';
  } else {
    fish.style.backgroundColor = 'gray'; // sad
    fish.style.width = '50px';
  }
}

