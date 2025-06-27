// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const usernameInput = document.getElementById('username');
  const greeting = document.getElementById('greeting');
  const getQuoteBtn = document.getElementById('get-quote');
  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');

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
  getQuoteBtn.addEventListener('click', () => {
    quoteEl.textContent = 'Loading...';
    authorEl.textContent = '';

    fetch('https://api.quotable.io/random')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        quoteEl.textContent = `"${data.content}"`;
        authorEl.textContent = `— ${data.author}`;
      })
      .catch(error => {
        quoteEl.textContent = 'Oops, something went wrong. Please try again.';
        authorEl.textContent = '';
        console.error('Fetch error:', error);
      });
  });
});
