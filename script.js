let spinning = false;

function spinWheel() {
  if (spinning) return;

  const wheel = document.getElementById('wheel');
  const degrees = Math.floor(Math.random() * 360) + 360 * 5; // Spin at least 5 times
  spinning = true;

  wheel.style.transition = 'transform 3s ease-out';
  wheel.style.transform = `rotate(${degrees}deg)`;

  setTimeout(() => {
    wheel.style.transition = 'none';
    spinning = false;
  }, 3000);
}
