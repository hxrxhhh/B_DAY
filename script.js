document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('birthdayMusic');
    const musicBtn = document.getElementById('musicBtn');
    let isPlaying = false;

    // Initialize Confetti
    const confettiSettings = {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    };

    // Music Control
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            musicBtn.textContent = '🎵 Play Music';
        } else {
            music.play();
            musicBtn.textContent = '🎵 Pause Music';
            confetti(confettiSettings);
        }
        isPlaying = !isPlaying;
    });

    // Image Click Handler
    document.querySelectorAll('.photo').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('zoomed');
        });
    });

    // Start music on first click
    document.body.addEventListener('click', () => {
        if (music.paused && !isPlaying) {
            music.play();
            musicBtn.textContent = '🎵 Pause Music';
            isPlaying = true;
            confetti(confettiSettings);
        }
    }, { once: true });
});
document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('birthdayMusic');
    const musicBtn = document.getElementById('musicBtn');
    let isPlaying = false;
    let confettiSystem = null;

    // Music Control
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            musicBtn.textContent = '🎵 Play Music';
        } else {
            music.play();
            musicBtn.textContent = '🎵 Pause Music';
            if(!confettiSystem) confettiSystem = new Confetti();
        }
        isPlaying = !isPlaying;
    });

    // Rest of your existing script.js code...
});