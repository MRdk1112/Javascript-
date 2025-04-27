// Countdown Timer
const targetDate = new Date('January 1, 2026 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = "🎉 Happy New Year! 🎉";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately

// Random Quotes
const quotes = [
  "Believe you can and you're halfway there.",
  "Your only limit is your mind.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream it. Wish it. Do it.",
  "Stay positive, work hard, make it happen."
];

function updateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerText = quotes[randomIndex];
}

// Change quote every 5 seconds
setInterval(updateQuote, 5000);
updateQuote(); // Run immediately
