const focusTimeInput = document.getElementById("focus-time");
const saveBtn = document.getElementById("saveBtn");

chrome.storage.local.get(["focusTime"], (localResult) => {
    focusTimeInput.value = localResult.focusTime
});

saveBtn.addEventListener("click", () => {
    if (focusTimeInput.value >= 1 && focusTimeInput.value <= 60) {
        chrome.storage.local.set({
            focusTime: focusTimeInput.value,
            timer: focusTimeInput.value * 60,
            isRunning: false
        });
        alert("Saved successfully!");
    }
    else {
        alert("Please input a value between 1 and 60 (inclusive both)!");
    }
});