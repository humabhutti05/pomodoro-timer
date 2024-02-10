let timer;
let modalTimer;
let minutes = 25;
let seconds = 0;
// let modalMinutes = 25;
// let modalSeconds = 0;
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

function handleDone() {
    console.log("Timer added!");
    $('#settingsModal').modal('hide');
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

function handleDone() {
    minutes = modalMinutes;
    seconds = modalSeconds;
    displayTime();

    console.log("Timer updated!");
    $('#settingsModal').modal('hide');
}
