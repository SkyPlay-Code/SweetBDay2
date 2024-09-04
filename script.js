// script.js
const loginForm = document.getElementById('login-form');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');

// Hint buttons and containers
const hint1Btn = document.getElementById('hint-1-btn');
const hint1Container = document.getElementById('hint-1');
const hint2Btn = document.getElementById('hint-2-btn');
const hint2Container = document.getElementById('hint-2');
const hint3Btn = document.getElementById('hint-3-btn');
const hint3Container = document.getElementById('hint-3');

// Add event listeners to hint buttons
hint1Btn.addEventListener('click', () => {
    hint1Container.style.display = 'block';
});

hint2Btn.addEventListener('click', () => {
    hint2Container.style.display = 'block';
});

hint3Btn.addEventListener('click', () => {
    hint3Container.style.display = 'block';
});

// Add event listener to login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = passwordInput.value.trim();
    if (password === 'CABBAGE') {
        // Redirect to main website
        window.location.href = './main/main-website.html';
    } else {
        errorMessage.textContent = 'Invalid password. Try again!';
    }
});