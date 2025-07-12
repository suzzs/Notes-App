// Wait for DOM to load
/*document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const usernameInput = document.getElementById('username');
  const greeting = document.getElementById('greeting');
  const getQuoteBtn = document.getElementById('get-quote');
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');
});

  // Theme toggle handler
  themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Optional: change button icon/text
    if (body.classList.contains('dark-mode')) {
      themeToggleBtn.textContent = '☀️ Toggle Theme';
    } else {
      themeToggleBtn.textContent = '🌙 Toggle Theme';
    }
  });

  // Greeting handler
  usernameInput.addEventListener('input', () => {
    const name = usernameInput.value.trim();
    if (name.length > 0) {
      greeting.textContent = `Hello, ${name}. Welcome under the stars.`;
    } else {
      greeting.textContent = '';
    }
  });

  // Fetch and display quote
  async function fetchhData(){
    let response = " "
  }

// ==== Starry Night Canvas Background ====

const canvas = document.createElement('canvas');
canvas.id = 'starCanvas';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Place canvas behind everything
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.zIndex = '-1';

let stars = [];
let shootingStars = [];

class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.2;
    this.alpha = Math.random();
    this.delta = Math.random() * 0.02;
  }

  draw() {
    this.alpha += this.delta;
    if (this.alpha <= 0 || this.alpha >= 1) this.delta = -this.delta;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.fill();
  }
}

class ShootingStar {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 0.5;
    this.length = Math.random() * 80 + 10;
    this.speed = Math.random() * 10 + 5;
    this.angle = Math.PI / 4;
    this.alpha = 1;
  }

  draw() {
    const dx = Math.cos(this.angle) * this.length;
    const dy = Math.sin(this.angle) * this.length;

    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x - dx, this.y - dy);
    ctx.strokeStyle = `rgba(255, 255, 255, ${this.alpha})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    this.x += this.speed;
    this.y += this.speed;
    this.alpha -= 0.02;

    if (this.alpha <= 0) this.reset();
  }
}

function initStars(count = 150) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(new Star());
  }
}
initStars();

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => star.draw());

  if (Math.random() < 0.01) {
    shootingStars.push(new ShootingStar());
  }

  shootingStars.forEach((shootingStar, index) => {
    shootingStar.draw();
    if (shootingStar.alpha <= 0) {
      shootingStars.splice(index, 1);
    }
  });

  requestAnimationFrame(animateStars);
}
animateStars();
*/



