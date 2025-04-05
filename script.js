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
// Image Zoom System
document.querySelectorAll('.gallery-image').forEach(img => {
    let isZoomed = false;
    
    img.addEventListener('click', () => {
        isZoomed = !isZoomed;
        img.classList.toggle('zoomed', isZoomed);
        
        if(isZoomed) {
            document.body.style.overflow = 'hidden';
            img.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Mobile double-tap support
    let lastTap = 0;
    img.addEventListener('touchend', (e) => {
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 500 && tapLength > 0) {
            e.preventDefault();
            img.click();
        }
        lastTap = currentTime;
    });
});

// Close zoom when clicking outside
document.addEventListener('click', (e) => {
    if(!e.target.closest('.gallery-image')) {
        document.querySelectorAll('.gallery-image').forEach(img => {
            img.classList.remove('zoomed');
            document.body.style.overflow = 'auto';
        });
    }
});