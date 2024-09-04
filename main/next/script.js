// script.js
const playButton = document.getElementById('play-button');
const stopButton = document.getElementById('stop-button');
const song = document.getElementById('song');
// script.js
const skipBtn = document.getElementById('skip-btn');

skipBtn.addEventListener('click', () => {
    window.location.href = 'end/thank-you.html'; // assumes you have an end.html file
});

playButton.addEventListener('click', () => {
    song.play();
    playButton.style.display = 'none';
    stopButton.style.display = 'block';
});

stopButton.addEventListener('click', () => {
    song.pause();
    playButton.style.display = 'block';
    stopButton.style.display = 'none';
});