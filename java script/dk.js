alert("my fist javascript");

function startTimer(durationInSeconds) {
    let timer = durationInSeconds;
    const display = document.getElementById("timerDisplay");
    
    const interval = setInterval(() => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        
        display.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        if (timer <= 0) {
            clearInterval(interval);
            alert("Time's up!");
        }
        
        timer--;
    }, 1000);
}

// Example usage: Start a 5-minute timer
window.onload = () => {
    document.getElementById("startButton").addEventListener("click", () => {
        startTimer(300);
    });
};
