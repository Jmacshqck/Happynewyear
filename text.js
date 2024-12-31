function updateCountdown() {
  //const newYear = new Date('January 1, 2025 00:00:00'); // Target date - Update yearly!
  const newYear = 
 new Date('January 1, 2025 00:00:00');
  const now = new Date();
  const diff = newYear - now;

  if (diff <= 0) {
    const audio = document.getElementById('newYearSound');
    audio.play();

    setTimeout(() => {
      window.location.href = 'happyNewYear.html';
    }, 2000); // Adjust the delay (2 seconds in this example)
    clearInterval(countdownInterval);
    return;
  }

  const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);

  // Check if 10 seconds left and play the MP3
  if (secondsLeft === 10) {
    const countSound = document.getElementById('countSound');
    countSound.play();
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = secondsLeft;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); 
