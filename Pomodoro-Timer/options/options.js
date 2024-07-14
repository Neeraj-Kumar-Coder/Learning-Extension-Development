const focusTimeInput = document.getElementById("focus-time");
const saveBtn = document.getElementById("saveBtn");

chrome.storage.local.get(["focusTime"], (localResult) => {
    focusTimeInput.value = localResult.focusTime
});

saveBtn.addEventListener("click", () => {
    chrome.storage.local.set({
        focusTime: focusTimeInput.value,
        timer: focusTimeInput.value * 60,
        isRunning: false
    });
});