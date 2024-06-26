const timeElement = document.getElementById("currentTime");
const timerElement = document.getElementById("timer");
const btnHolder = document.querySelector(".btn-holder");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

chrome.storage.sync.get(["name"], (syncResult) => {
    const name = syncResult.name ?? "Stranger";
    const updater = () => {
        chrome.storage.local.get(["timer"], (localResult) => {
            const timer = localResult.timer ?? 0;

            const currentTime = new Date().toLocaleTimeString();
            timeElement.textContent = `Hello ${name}, the current time is: ${currentTime}`;
            timerElement.textContent = `The timer is at: ${timer} seconds`;
            btnHolder.style.display = "flex";
        });
    };

    updater();
    setInterval(updater, 1000);
});

startBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: true,
    });
});

stopBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        isRunning: false,
    });
});

resetBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        timer: 0,
        isRunning: false,
    });
});

// chrome.action.setBadgeText({
//     text: "TIME"
// }, () => { console.log("Finished setting badge!") });
