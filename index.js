window.addEventListener('load', function() {
    // Simulate a loading delay of 5 seconds
    setTimeout(function() {
        // After the loading delay, fade in the loading elements
        document.getElementById('loading-container').classList.add('fade-in');
        document.getElementById('content').style.display = 'block';

        // After the fade-in animation duration (e.g., 1 second), remove the loading image
        setTimeout(function() {
            document.getElementById('loading-icon').style.display = 'none';
        }, 0); // 1000 milliseconds = 1 second (adjust as needed)
    }, 5000); // 5000 milliseconds = 5 seconds
});
