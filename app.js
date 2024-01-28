// let timer;
// let minutes = 25;
// let seconds = 0;
// let isTimerRunning = false;

// function startPauseTimer() {
//     if (isTimerRunning) {
//         clearInterval(timer);
//     } else {
//         timer = setInterval(updateTimer, 1000);
//     }
//     isTimerRunning = !isTimerRunning;
//     togglePlayPauseButton();
// }

// function restartTimer() {
//     clearInterval(timer);
//     minutes = 25;
//     seconds = 0;
//     displayTime();
//     isTimerRunning = false;
//     togglePlayPauseButton();
// }

// function updateTimer() {
//     if (minutes === 0 && seconds === 0) {
//         clearInterval(timer);
//         alert("Pomodoro completed!");
//         isTimerRunning = false;
//         togglePlayPauseButton();
//     } else {
//         if (seconds === 0) {
//             minutes--;
//             seconds = 59;
//         } else {
//             seconds--;
//         }
//         displayTime();
//     }
// }

// function togglePlayPauseButton() {
//     const playPauseButton = document.getElementById('playPauseButton');
//     playPauseButton.innerText = isTimerRunning ? 'Pause' : 'Play';
// }

// function displayTime() {
//     document.getElementById('timer').innerText = `${padZero(minutes)}:${padZero(seconds)}`;
// }

// function padZero(value) {
//     return value < 10 ? `0${value}` : value;
// }

// // Additional functions for modal timer adjustments (if needed)
// function adjustTime(action) {
//     if (action === 'increase') {
//         minutes++;
//     } else if (action === 'decrease' && minutes > 0) {
//         minutes--;
//     }
//     displayTime();
// }


// // ... (your existing JavaScript) ...

// let modalTimer;
// let isModalTimerRunning = false;

// function openSettings() {
//     $('#settingsModal').modal('show');
//     startModalTimer();
// }

// function startModalTimer() {
//     modalTimer = setInterval(updateModalTimer, 1000);
//     isModalTimerRunning = true;
// }

// function updateModalTimer() {
//     if (isModalTimerRunning) {
//         // Your modal timer logic goes here
//         // For example, you can increment seconds and update the display
//         // For demonstration purposes, let's just display the elapsed time
//         const modalTimerElement = document.getElementById('modalTimer');
//         modalTimerElement.innerText = formatElapsedTime();
//     }
// }

// // ... (your existing JavaScript) ...

// function adjustTime(action) {
//     if (action === 'increase') {
//         minutes++;
//     } else if (action === 'decrease' && minutes > 0) {
//         minutes--;
//     }
//     displayTime();
// }

// function formatElapsedTime() {
//     const elapsedMinutes = Math.floor(seconds / 60);
//     const elapsedSeconds = seconds % 60;
//     return `${padZero(elapsedMinutes)}:${padZero(elapsedSeconds)}`;
// }

// // ... (your existing JavaScript) ...


// // Your existing functions (updateTimer, restartTimer, adjustTime, displayTime, padZero) go here


let timer;
let modalTimer;
let minutes = 25;
let seconds = 0;
let modalMinutes = 25;
let modalSeconds = 0;
let isTimerRunning = false;
let isModalTimerRunning = false;

function startPauseTimer() {
    if (isTimerRunning) {
        clearInterval(timer);
    } else {
        timer = setInterval(updateTimer, 1000);
    }
    isTimerRunning = !isTimerRunning;
    togglePlayPauseButton();
}

function restartTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    displayTime();
    isTimerRunning = false;
    togglePlayPauseButton();
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert("Pomodoro completed!");
        isTimerRunning = false;
        togglePlayPauseButton();
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        displayTime();
    }
}

function openSettingsModal() {
    // Update modal timer before showing the modal
    updateModalTime();
    $('#settingsModal').modal('show');
}

function startPauseModalTimer() {
    if (isModalTimerRunning) {
        clearInterval(modalTimer);
    } else {
        modalTimer = setInterval(updateModalTimer, 1000);
    }
    isModalTimerRunning = !isModalTimerRunning;
}

function updateModalTimer() {
    if (modalMinutes === 0 && modalSeconds === 0) {
        clearInterval(modalTimer);
        alert("Modal timer completed!");
        isModalTimerRunning = false;
    } else {
        if (modalSeconds === 0) {
            modalMinutes--;
            modalSeconds = 59;
        } else {
            modalSeconds--;
        }
        displayModalTime();
    }
}

function adjustTime(action) {
    if (action === 'increase') {
        modalMinutes++;
    } else if (action === 'decrease' && modalMinutes > 0) {
        modalMinutes--;
    }
    displayModalTime();
}

function updateModalTime() {
    modalMinutes = minutes;
    modalSeconds = seconds;
    displayModalTime();
}

function displayModalTime() {
    document.getElementById('modalTimer').innerText = `${padZero(modalMinutes)}:${padZero(modalSeconds)}`;
    document.getElementById('time').innerText = `${padZero(modalMinutes)}:00`;
}

function togglePlayPauseButton() {
    const playPauseButton = document.getElementById('playPauseButton');
    playPauseButton.innerText = isTimerRunning ? 'Pause' : 'Play';
}

function displayTime() {
    document.getElementById('timer').innerText = `${padZero(minutes)}:${padZero(seconds)}`;
}

function padZero(value) {
    return value < 10 ? `0${value}` : value;
}
