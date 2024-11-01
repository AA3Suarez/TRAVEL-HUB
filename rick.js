// Randomly position the "Watch Me" button
window.onload = function () {
    const watchMeBtn = document.getElementById('watchMeBtn');
    const modal = document.getElementById('videoModal');
    const closeBtn = document.getElementById('closeBtn');
    const video = document.getElementById('rickroll-video');

    // Function to position the button randomly
    function positionButtonRandomly() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const x = Math.random() * (screenWidth - watchMeBtn.offsetWidth);
        const y = Math.random() * (screenHeight - watchMeBtn.offsetHeight);
        watchMeBtn.style.left = `${x}px`;
        watchMeBtn.style.top = `${y}px`;
    }

    // Show the button after a random delay (1-10 seconds)
    setTimeout(() => {
        watchMeBtn.style.display = 'block';
        positionButtonRandomly();
    }, Math.random() * 10000);

    // Handle "Watch Me" button click
    watchMeBtn.onclick = function () {
        modal.style.display = 'flex';
        video.play(); // Start the video
    };

    // Handle close button click
    closeBtn.onclick = function () {
        modal.style.display = 'none';
        video.pause(); // Stop the video
        video.currentTime = 0; // Reset the video
    };

    // Ensure video stops when modal is closed by clicking outside
    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            video.pause();
            video.currentTime = 0;
        }
    };
};