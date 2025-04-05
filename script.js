document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const music = document.getElementById('birthdayMusic');
    let isMusicPlaying = false;

    // Initialize Confetti
    const confettiSettings = { target: 'confetti' };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // Start Experience
    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        music.play();
        isMusicPlaying = true;
        document.body.classList.add('party-started');
    });

    // Image Zoom
    document.querySelectorAll('.gallery-img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('zoomed');
        });
    });
});

// Google Drive Upload
async function uploadToDrive() {
    const fileInput = document.getElementById('driveUpload');
    const status = document.getElementById('uploadStatus');
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzpCjeSoyptqV3U-sgDBMDgpnTPaDPZwl77jAAVsx2wYYJjKMWFXYS5mxFLK3Mpa4ZHog/exec';

    if (!fileInput.files[0]) {
        status.textContent = "Please select a photo first! 📸";
        return;
    }

    try {
        status.textContent = "Uploading to Barsha's Memory Book... 📤";
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            status.innerHTML = "Success! 🎉 Your photo is now part of Barsha's birthday memories!";
            fileInput.value = '';
        } else {
            status.textContent = "Oops! Please try again later.";
        }
    } catch (error) {
        status.textContent = `Error: ${error.message}`;
    }
}